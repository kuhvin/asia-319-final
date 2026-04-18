import { useState, useRef } from "react";
import Typewriter from "./Typewriter";
import { story } from "./storydata";
import { endings } from "./storyending";

function shuffleChoices(choices) {
  const arr = [...choices];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function checkTagCondition(currentTags, ruleTags = [], mode = "all") {
  if (!ruleTags.length) return true;
  if (mode === "any") return ruleTags.some((tag) => currentTags.includes(tag));
  return ruleTags.every((tag) => currentTags.includes(tag));
}

export default function App() {
  const [step, setStep] = useState(-1);
  const [audience, setAudience] = useState(0);
  const [risk, setRisk] = useState(0);
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [pendingChoice, setPendingChoice] = useState(null);
  const [activeChoices, setActiveChoices] = useState([]);
  const [tags, setTags] = useState([]);
  const [qscore, setQscore] = useState(0);

  const pageRef = useRef(null);
  const typingAudioRef = useRef(null);

  const makeId = () => `${Date.now()}-${Math.random()}`;

  const addTag = (tag) => {
    if (!tag) return;
    setTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  };

  const handleTypingUpdate = () => {
    if (!pageRef.current) return;

    const container = pageRef.current;
    const contentBottom = container.scrollHeight;
    const viewBottom = container.scrollTop + container.clientHeight;
    const threshold = container.clientHeight * 0.5;

    if (contentBottom - viewBottom < threshold) {
      container.scrollTop = contentBottom - container.clientHeight * 0.5;
    }
  };

  const formatText = (text, previousSpeaker = null) => {
    let lastWasSpeaker = false;
    let currentSpeaker = previousSpeaker;

    const extractSpeakerBase = (line) => {
      const trimmed = line.trim();
      const match = trimmed.match(/^([A-Z]+)(?:\s*\(([^)]+)\))?$/);
      if (!match) return null;
      return match[1];
    };

    return {
      elements: text.split("\n").map((line, idx) => {
        const trimmed = line.trim();

        if (trimmed === "") {
          lastWasSpeaker = false;
          return <div key={idx} style={{ height: "12px" }} />;
        }

        if (trimmed === "CUT TO:" || trimmed === "BACK TO:") {
          lastWasSpeaker = false;
          currentSpeaker = null;
          return (
            <div
              key={idx}
              style={{
                textAlign: "right",
                margin: "50px 0 30px 0",
                letterSpacing: "1px",
              }}
            >
              {trimmed}
            </div>
          );
        }

        if (trimmed.startsWith("EXT.") || trimmed.startsWith("INT.")) {
          lastWasSpeaker = false;
          currentSpeaker = null;
          return (
            <div key={idx} style={{ margin: "20px 0", letterSpacing: "1px" }}>
              {trimmed}
            </div>
          );
        }

        if (/^[A-Z]+(?:\s*\([A-Z\s.'-]+\))?$/.test(trimmed) && trimmed.length < 35) {
          const baseSpeaker = extractSpeakerBase(trimmed);
          let displaySpeaker = trimmed;

          if (
            baseSpeaker &&
            currentSpeaker === baseSpeaker &&
            !trimmed.includes("(CONT'D)")
          ) {
            displaySpeaker = `${baseSpeaker} (CONT'D)`;
          }

          currentSpeaker = baseSpeaker;
          lastWasSpeaker = true;

          return (
            <div
              key={idx}
              style={{
                textAlign: "center",
                margin: "18px 0 6px 0",
                letterSpacing: "2px",
              }}
            >
              {displaySpeaker}
            </div>
          );
        }

        if (lastWasSpeaker) {
          lastWasSpeaker = false;
          return (
            <div
              key={idx}
              style={{
                marginLeft: "60px",
                marginRight: "60px",
              }}
            >
              {trimmed}
            </div>
          );
        }

        lastWasSpeaker = false;
        currentSpeaker = null;

        return (
          <div key={idx} style={{ margin: "8px 0" }}>
            {trimmed}
          </div>
        );
      }),
      lastSpeaker: currentSpeaker,
    };
  };

  const appendHistory = (text, type = "story") => {
    setHistory((prev) => [...prev, { text, type, id: makeId() }]);
  };

  const getEndingText = (finalQscore, finalTags) => {
    const hasTag = (tag) => finalTags.includes(tag);

    const queerCommitment =
      hasTag("kai_clearest_truth") ||
      hasTag("final_closeness") ||
      hasTag("kai_together_against_return");

    let endingId = "ending_brother";

    if (finalQscore >= 43 && queerCommitment) {
      endingId = "ending_queer";
    } else if (finalQscore >= 22) {
      endingId = "ending_ambiguous";
    }

    const endingBeat = endings.find((e) => e.id === endingId);
    return endingBeat?.text || "FADE OUT.";
  };

  const finishGame = (finalTags = tags, finalQscore = qscore) => {
    const endingText = getEndingText(finalQscore, finalTags);

    setShowChoices(false);
    setActiveChoices([]);
    setIsTyping(true);
    appendHistory(endingText, "story");

    setPendingChoice({
      phase: "ending",
      tagSnapshot: finalTags,
    });
  };

  const getNextVisibleStep = (fromIndex, currentTags) => {
    let idx = fromIndex;

    while (idx < story.length) {
      const beat = story[idx];
      const blocked = beat.blocksTag && currentTags.includes(beat.blocksTag);
      const required = !beat.requiresTag || currentTags.includes(beat.requiresTag);

      if (!blocked && required) {
        return idx;
      }

      idx += 1;
    }

    return idx;
  };

  const advanceToStep = (requestedStep, tagSnapshot = tags) => {
    const nextStep = getNextVisibleStep(requestedStep, tagSnapshot);

    if (nextStep >= story.length) {
      finishGame(tagSnapshot, qscore);
      return;
    }

    const beat = story[nextStep];
    setStep(nextStep);

    if (beat.type === "text") {
      setShowChoices(false);
      setActiveChoices([]);
      setIsTyping(true);
      appendHistory(beat.text, "story");
      return;
    }

    if (beat.type === "choice") {
      let visibleChoices = beat.choices || [];

      if (beat.choiceLimit && beat.choiceLimit < visibleChoices.length) {
        visibleChoices = shuffleChoices(visibleChoices).slice(0, beat.choiceLimit);
      } else {
        visibleChoices = shuffleChoices(visibleChoices);
      }

      setActiveChoices(visibleChoices);
      setShowChoices(true);
      setIsTyping(false);
    }
  };

  const ensureTypingAudio = () => {
    if (!typingAudioRef.current) {
      typingAudioRef.current = new Audio(
        "https://kuhvin.github.io/asia-319-final/typing.mp3"
      );
      typingAudioRef.current.volume = 0.12;
      typingAudioRef.current.loop = true;
      typingAudioRef.current.preload = "auto";
    }

    return typingAudioRef.current;
  };

  const unlockTypingAudio = async () => {
    const audio = ensureTypingAudio();

    try {
      audio.muted = true;
      audio.currentTime = 0;
      await audio.play();
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
    } catch (err) {
      audio.muted = false;
      console.error("Audio unlock failed:", err);
    }
  };

  const startGame = async () => {
    setQscore(0);
    await unlockTypingAudio();
    setStarted(true);

    setTimeout(() => {
      const freshTags = [];
      setAudience(0);
      setRisk(0);
      setHistory([]);
      setGameEnded(false);
      setPendingChoice(null);
      setActiveChoices([]);
      setTags(freshTags);
      advanceToStep(0, freshTags);
    }, 500);
  };

  const applySceneModifiers = (choice, tagSnapshot) => {
    let audienceDelta = choice.audience || 0;
    let riskDelta = choice.risk || 0;
    let qtagDelta = choice.qtag || 0;

    if (choice.bonusIfTags) {
      for (const rule of choice.bonusIfTags) {
        if (checkTagCondition(tagSnapshot, rule.tags, rule.mode || "all")) {
          audienceDelta += rule.audience || 0;
          riskDelta += rule.risk || 0;
          qtagDelta += rule.qtag || 0;
        }
      }
    }

    if (choice.penaltyIfTags) {
      for (const rule of choice.penaltyIfTags) {
        if (checkTagCondition(tagSnapshot, rule.tags, rule.mode || "all")) {
          audienceDelta += rule.audience || 0;
          riskDelta += rule.risk || 0;
          qtagDelta += rule.qtag || 0;
        }
      }
    }

    return { audienceDelta, riskDelta, qtagDelta };
  };

  const handleChoice = (choice) => {
    if (isTyping) return;

    const nextTags = [...tags];
    if (choice.setTag && !nextTags.includes(choice.setTag)) {
      nextTags.push(choice.setTag);
    }

    const { audienceDelta, riskDelta, qtagDelta } = applySceneModifiers(choice, nextTags);

    setAudience((prev) => prev + audienceDelta);
    setRisk((prev) => prev + riskDelta);
    setQscore((prev) => prev + qtagDelta);

    if (choice.setTag) {
      addTag(choice.setTag);
    }

    setShowChoices(false);
    setActiveChoices([]);
    setIsTyping(true);

    setPendingChoice({
      followUp: choice.followUp || null,
      nextStep: choice.goToStep ?? step + 1,
      phase: "choice",
      tagSnapshot: nextTags,
    });

    appendHistory(choice.text, "choice");
  };

  const handleTypedBlockComplete = () => {
    if (pendingChoice) {
      if (pendingChoice.phase === "choice") {
        if (pendingChoice.followUp) {
          setPendingChoice({
            ...pendingChoice,
            phase: "followUp",
          });

          setIsTyping(true);
          appendHistory(pendingChoice.followUp, "story");
          return;
        }

        const nextStep = pendingChoice.nextStep;
        const tagSnapshot = pendingChoice.tagSnapshot || tags;
        setPendingChoice(null);

        setTimeout(() => {
          advanceToStep(nextStep, tagSnapshot);
        }, 250);
        return;
      }

      if (pendingChoice.phase === "followUp") {
        const nextStep = pendingChoice.nextStep;
        const tagSnapshot = pendingChoice.tagSnapshot || tags;
        setPendingChoice(null);

        setTimeout(() => {
          advanceToStep(nextStep, tagSnapshot);
        }, 250);
        return;
      }

      if (pendingChoice.phase === "ending") {
        setPendingChoice(null);
        setGameEnded(true);
        setShowChoices(false);
        setActiveChoices([]);
        setTimeout(() => setStep(-2), 800);
        return;
      }
    }

    const currentBeat = story[step];

    if (currentBeat?.type === "text") {
      setTimeout(() => {
        advanceToStep(step + 1, tags);
      }, 250);
      return;
    }

    setIsTyping(false);
    setShowChoices(true);
  };

  if (step === -1) {
    return (
      <div className="title-screen">
        <button
          className={`start-button ${started ? "fade-out" : ""}`}
          onClick={startGame}
        >
          Start
        </button>
      </div>
    );
  }

  const getPreviousSpeakerForIndex = (index) => {
    let previousSpeaker = null;

    for (let i = 0; i < index; i++) {
      const formatted = formatText(history[i].text, previousSpeaker);
      previousSpeaker = formatted.lastSpeaker;
    }

    return previousSpeaker;
  };

  const adminJumpToEnding = async (target) => {
    const presets = {
      brother: {
        qscore: 0,
        tags: [],
      },
      ambiguous: {
        qscore: 0,
        tags: ["kai_shared_account"],
      },
      queer: {
        qscore: 50,
        tags: ["kai_clearest_truth", "final_closeness"],
      },
    };

    const preset = presets[target];
    if (!preset) return;

    await unlockTypingAudio();

    setAudience(0);
    setRisk(0);
    setHistory([]);
    setGameEnded(false);
    setPendingChoice(null);
    setActiveChoices([]);
    setTags(preset.tags);
    setQscore(preset.qscore);
    setStarted(true);
    setStep(9999);

    const endingText = getEndingText(preset.qscore, preset.tags);

    setShowChoices(false);
    setIsTyping(true);
    appendHistory(endingText, "story");

    setPendingChoice({
      phase: "ending",
      tagSnapshot: preset.tags,
    });
  };

  return (
    <div className="app">
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          display: "flex",
          gap: "8px",
          zIndex: 9999,
        }}
      >
        {/* <button onClick={() => adminJumpToEnding("brother")}>Test Brother</button>
        <button onClick={() => adminJumpToEnding("ambiguous")}>Test Ambiguous</button>
        <button onClick={() => adminJumpToEnding("queer")}>Test Queer</button> */}
      </div>

      <div className="page" ref={pageRef}>
        {history.map((item, i) => {
          const isLast = i === history.length - 1;
          const previousSpeaker = getPreviousSpeakerForIndex(i);
          const formatted = formatText(item.text, previousSpeaker);

          return (
            <div
              key={item.id}
              className={`script-block ${item.type === "choice" ? "choice-text" : ""}`}
            >
              {isLast && isTyping ? (
                <Typewriter
                  text={item.text}
                  speed={20}
                  showCursor={showChoices}
                  onUpdate={handleTypingUpdate}
                  formatter={(displayed) => formatText(displayed, previousSpeaker).elements}
                  audioRef={typingAudioRef}
                  onComplete={() => {
                    setIsTyping(false);
                    handleTypedBlockComplete();
                  }}
                />
              ) : (
                formatted.elements
              )}
            </div>
          );
        })}
      </div>

      <div className={`choice-box ${gameEnded ? "hide" : ""}`}>
        {showChoices &&
          step >= 0 &&
          step < story.length &&
          story[step].type === "choice" &&
          activeChoices.map((choice, index) => (
            <button
              key={`${choice.prompt}-${index}`}
              className="choice-button"
              onClick={() => handleChoice(choice)}
            >
              {choice.prompt}
            </button>
          ))}
      </div>

      {step === -2 && (
        <div className="score-panel">
          <h2>Outcome</h2>
          <p>Audience: {audience}</p>
          <p>Risk: {risk}</p>
          <p>Tags unlocked: {tags.length}</p>
          <button onClick={startGame}>Restart</button>
        </div>
      )}
    </div>
  );
}