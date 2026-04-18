export const story = [
    // =========================
    // ACT I — THE PASS
    // =========================

    {
      type: "text",
      text: `EXT. MOUNTAIN PASS — LATE SUNSET

  The pass narrows where stone has been worn smooth by weather and caravan wheels. Far below, terraces catch what remains of the light in long broken bands. From the valley rise the ordinary sounds of evening labor: harness bells, shutters, a dog, the far-off clatter of a cart striking loose boards.

  Two men have come here by different roads, though any eye trained in the same old discipline would know at once that they were shaped by one institution. Their bearing gives them away before their faces do.

  LIAN stands near the edge with his back turned.

  His traveling robe is light enough to show the dust of the road and well-made enough to suggest he did not belong to roads for most of his life. The clasp at his shoulder bears no emblem, but the habit of wearing it is official. Even tired, he looks like a man who was taught to make composure visible.

  Footsteps approach.

  KAI appears along the ridge path a moment later, dark outer robe wind-pulled and travel-marked, sword hung with the indifference of long practice. His clothes are plainer, but he carries them with the same old exactness.

  KAI (OFF SCREEN)
  You chose a dangerous place to wait.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Continue with humour.",
          text: `KAI (ON SCREEN)
  And yet I thought it would be worse to leave you waiting here alone.`,
          audience: 2,
          qtag: 0,
          risk: 1,
          followUp: `LIAN
  That is almost kind by your standards.`,
          setTag: "kai_measured_start"
        },
        {
          prompt: "Continue with direct warmth.",
          text: `KAI (ON SCREEN)
  Dangerous or not, I would have come wherever you asked me to.`,
          audience: 4,
          qtag: 2,
          risk: 4,
          followUp: `LIAN
  You say that too easily for a man who was late.`,
          setTag: "kai_open_start"
        },
        {
          prompt: "Continue with formality.",
          text: `KAI (ON SCREEN)
  A hidden meeting place is rarely a comfortable one.`,
          audience: 0,
          qtag: 0,
          risk: -3,
          followUp: `LIAN
  And here I thought the climb had softened you.`,
          setTag: "kai_formal_start"
        }
      ]
    },

    {
      type: "text",
      requiresTag: "kai_measured_start",
      text: `In training, Kai had always been the one who concealed concern beneath precision. It is strange, after so much time, to find that the old disguise still exists and yet no longer fits him quite as closely.

  The change is small enough that an inattentive man would miss it, but Lian has never been inattentive where Kai is concerned.`
    },

    {
      type: "choice",
      requiresTag: "kai_open_start",
      choices: [
        {
          prompt: "Stand by the warmth instead of retreating.",
          text: `KAI
  If I had wanted distance, I could have found a safer excuse than honesty.`,
          audience: 3,
          qtag: 1,
          risk: 3,
          followUp: `LIAN
  That is not honesty. That is confidence pretending not to blush.`,
          setTag: "kai_does_not_retreat_early"
        },
        {
          prompt: "Walk it back before the moment settles.",
          text: `KAI
  Do not mistake the road for sentiment.`,
          audience: 0,
          qtag: -1,
          risk: -3,
          followUp: `The wind moves hard across the ridge.

  What had just come nearer does not vanish, but it has been made to stand farther off.`,
          penaltyIfTags: [
            {
              tags: ["kai_open_start"],
              mode: "all",
              audience: -2,
              qtag: -1,
              risk: -1
            }
          ]
        },
        {
          prompt: "Rephrase the truth.",
          text: `KAI
  I meant only that I trust your letters more than I trust most men.`,
          audience: 2,
          qtag: 0,
          risk: 0,
          followUp: `Lian does not answer at once.

  That is answer enough.`,
          setTag: "kai_narrowed_truth"
        }
      ]
    },

    {
      type: "text",
      text: `Lian turns at last. 

  LIAN
  You still climb as though the mountain were personally insulting you.

  KAI
  And you still choose your vantage points like a man expecting betrayal from three directions at once.

  That wins the faintest change in Lian's expression, not quite a smile.

  The wind crosses the ridge and brings smoke, spice, damp wool, and the thin metallic ring of bells from the valley below. The settlement cannot yet be seen clearly from here, but it has already begun to announce itself.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Acknowledge the old familiarity.",
          text: `KAI
  Some habits were taught too early to be rid of now.`,
          audience: 2,
          qtag: 1,
          risk: 1,
          setTag: "old_familiarity_named"
        },
        {
          prompt: "Shift to the reason for the meeting.",
          text: `KAI
  Your letter sounded as though delay itself had become dangerous.`,
          audience: 2,
          qtag: -1,
          risk: -1,
          followUp: `LIAN
  It had.`,
          setTag: "kai_moves_to_business"
        },
        {
          prompt: "Let concern show more plainly.",
          text: `KAI
  No letter of yours has ever sounded like that without cause. I know the difference between your calm and your worry.`,
          audience: 4,
          qtag: 2,
          risk: 3,
          followUp: `LIAN
  You should be more careful when you decide to sound perceptive.`,
          setTag: "kai_reads_lian"
        }
      ]
    },

    {
      type: "text",
      text: `Lian reaches inside his robe and takes out a narrow oilskin packet bound with dark thread.

  It is not large, but Kai immediately recognizes the offical document by the way Lian holds it.

  LIAN
  I was meant to deliver this to the local office three days ago. It was left for me back at the court.

  KAI
  And you did not.

  LIAN
  No.

  Kai does not ask to take it from him. That restraint is old too.

  Below them, the valley deepens into blue. Tiny lights begin to appear where the market roads meet.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Ask plainly why he kept it.",
          text: `KAI
  Then tell me what broke your obedience.`,
          audience: 4,
          qtag: 1,
          risk: 2,
          followUp: `LIAN is quiet for a moment.
          LIAN
  I had hoped you would ask that before you asked whose seal it bore.`,
          setTag: "kai_asks_moral"
        },
        {
          prompt: "Ask whose order he is refusing.",
          text: `KAI
  Whose seal are you refusing to honor?`,
          audience: 1,
          qtag: 0,
          risk: -1,
          followUp: `Lian is silent`,
          setTag: "kai_asks_hierarchy"
        },
        {
          prompt: "Say nothing and make him continue.",
          text: `KAI
  ...`,
          audience: 2,
          qtag: 0,
          risk: 0,
          followUp: `LIAN
  You always did know when silence becomes a demand.`,
          setTag: "kai_uses_silence"
        }
      ]
    },

    {
      type: "text",
      text: `LIAN
  It is a report on the river quarter, the market roads, and the hill shrines beyond them. The office at home wants a clean account: what belongs, what does not, what may be taxed, what should be curtailed, what speech should be admitted into the record, what custom should be tolerated only in private, if at all.

  Kai listens without interrupting. He knows what a report that like would bring to the village.

  LIAN
  The kind of document our instructors would call useful.

  Kai looks up at him.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Name the violence in that neatness.",
          text: `KAI
  Useful, like a blade when what it cuts cannot argue with the shape it has been cut into.`,
          audience: 4,
          qtag: 1,
          risk: 2,
          followUp: `Lian nods and exhales in silent agreement.`,
          setTag: "kai_names_violence",
          bonusIfTags: [
            {
              tags: ["kai_asks_moral", "kai_measured_start"],
              mode: "any",
              audience: 1,
              qtag: 0,
              risk: 0
            }
          ]
        },
        {
          prompt: "Keep the criticism careful.",
          text: `KAI
  Useful to the office, perhaps. A bit less useful to the people being described.`,
          audience: 2,
          qtag: 0,
          risk: 0,
          followUp: `Lian lowers his eyes briefly to the packet between them.`,
          setTag: "kai_careful_critique"
        },
        {
          prompt: "Recall the official language.",
          text: `KAI
  Reports are written so decisions may be made consis-.`,
          audience: -2,
          qtag: -2,
          risk: -3,
          followUp: `LIAN
  You know better than that. Do not insult me by pretending otherwise.`,
          setTag: "kai_retreats_to_office",
          penaltyIfTags: [
            {
              tags: ["kai_reads_lian", "old_familiarity_named"],
              mode: "any",
              audience: -2,
              qtag: -1,
              risk: -1
            }
          ]
        }
      ]
    },

    {
      type: "text",
      requiresTag: "kai_measured_start",
      text: `The valley is nearly dark now.

  Lian folds the packet once across his palm.

  LIAN
  I came because I could not tell whether I had withheld the report out of conscience or cowardice. I thought perhaps distance would clarify the difference.

  Kai does not look at the valley when he asks.

  KAI
  And has it?`
    },

    {
      type: "text",
      blocksTag: "kai_measured_start",
      text: `The valley is nearly dark now.

  Lian folds the packet once across his palm. He carefully tucks it back into his robe, then looks up at Kai.

  LIAN
  This will be my final report. I am leaving the administration after this. But I came here because I could not tell whether I had withheld the report out of conscience or cowardice. I thought perhaps distance would clarify the difference.

  KAI
  And has it?

  LIAN
  No, but it has made lying to myself more exhausting.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Respond with candor.",
          text: `KAI
  Then start there. Most cowardice improves under ornament. Most conscience does not.`,
          audience: 4,
          qtag: 1,
          risk: 2,
          followUp: `LIAN
  You speak as though you have rehearsed that for me.

  Kai grins.`,
          setTag: "kai_candor_pass"
        },
        {
          prompt: "Reassure him carefully.",
          text: `KAI
  The fact that you are asking the question at all is not evidence against you.`,
          audience: 3,
          qtag: 0,
          risk: 0,
          setTag: "kai_reassures"
        },
        {
          prompt: "Keep him moving instead.",
          text: `KAI
  Then we should go below before dark finishes deciding for us.`,
          audience: 1,
          qtag: -2,
          risk: -2,
          followUp: `LIAN looks at him for a moment, then nods and follows him down the ridge path.`,
          setTag: "kai_evades_with_motion"
        }
      ]
    },

    // =========================
    // ACT II — THE MARKET
    // =========================

    {
      type: "text",
      text: `CUT TO:

  EXT. BORDER MARKET — NIGHT

  The road empties into a square crowded with cloth awnings, low wooden stalls, tethered animals, copper pans, wicker baskets, and a confusion of voices that overlap without ever flattening into one sound. A woman fries dough beside a brazier while arguing with a man selling lacquered combs. A child runs past with ribbons tied around both wrists. Somewhere farther in, a flute competes badly with laughter and loses. This place is not waiting to be understood by them; it is already busy existing.

  Lian slows almost without meaning to. Kai notices.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Notice the place with him.",
          text: `KAI
  If we stand here much longer, they will start charging us for looking.`,
          audience: 3,
          qtag: 0,
          risk: 0,
          setTag: "kai_notices_world"
        },
        {
          prompt: "Acknowledge the crowd.",
          text: `KAI
  Crowds are useful. No one studies strangers closely when everyone is already occupied.`,
          audience: 1,
          qtag: 0,
          risk: -2,
          setTag: "kai_uses_crowd"
        },
        {
          prompt: "Appreciate the scenery.",
          text: `KAI
  I had forgotten a place could be this full without asking leave of a clerk first.`,
          audience: 4,
          qtag: 0,
          risk: 2,
          followUp: `Lian barks a laugh at that, but it is not a joke.

          LIAN
  That may be the most subversive thing you have said since sunset.`,
          setTag: "kai_admires_disorder"
        }
      ]
    },

    {
      type: "text",
      requiresTag: "kai_notices_world",
      text: `A man at the edge of the square is carving characters into thin slips of wood and handing them to passersby in exchange for coins. Lian watches the knife more than the characters being made. The cuts are quick and final.

  Whatever is being written here belongs first to the people who can read it without explanation. They are not among those people.`
    },

    {
      type: "text",
      requiresTag: "kai_uses_crowd",
      text: `They move through the square efficiently, and for several moments the market becomes what men like them have often preferred in unfamiliar places. 

  Kai glances back at Lian, whose eyes are scanning the folk walking with them.`
    },

    {
      type: "choice",
      requiresTag: "kai_uses_crowd",
      choices: [
        {
          prompt: "Acknowledge their old habits",
          text: `KAI
  I know. Some lessons return too quickly when a place is not ours.`,
          audience: 4,
          qtag: 1,
          risk: 1,
          followUp: `LIAN
  About time you understood that.`,
          setTag: "kai_admits_instrumentalizing"
        },
        {
          prompt: "Understand the instinct.",
          text: `KAI looks forward again. He too begins to look for patterns in the crowd.`,
          audience: 0,
          qtag: -1,
          risk: -2,
          setTag: "kai_flattens_market"
        },
        {
          prompt: "Make light of it.",
          text: `KAI
              Relax, my friend. We are not being followed by assassins tonight.`,
          audience: 2,
          qtag: 0,
          risk: 0,
          followUp: `LIAN
  You speak as if you know that for certain.

  Kai sighs and turns back around.`,
          setTag: "kai_uses_but_knows"
        }
      ]
    },

    {
      type: "text",
      text: `A woman at a food stall calls out to them in a language neither of them knows. Her hands move quickly as she points to skewers laid over the coals. Kai bows his head. Lian watches his gesture more carefully than her words.

  LIAN
  Do you know what she said?

  KAI
  Not at all.

  LIAN
  You looked like you did.

  Kai turns his head without looking at him, still smiling faintly at the vendor.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Admit it was instinct dressed as courtesy.",
          text: `KAI
  I know only silence would have been ruder than uncertainty.`,
          audience: 3,
          qtag: -1,
          risk: 0,
          followUp: `LIAN
  So you bowed to politeness and called it understanding.

  Kai then looks at him. He chuckles.

  KAI
  No need to be so harsh. Where is your politeness anyways?`,
          setTag: "market_politeness"
        },
        {
          prompt: "Make light of it.",
          text: `KAI
  A respectful bow survives in places where language does not.`,
          audience: 1,
          qtag: -1,
          risk: -1,
          setTag: "market_lightness"
        },
        {
          prompt: "Answer with unusual self-awareness.",
          text: `Kai's gaze hardens. Something passes in his eyes.
          
          KAI
  I answered because I did not want to pass through this square as though it existed only for my convenience.`,
          audience: 4,
          qtag: 2,
          risk: 2,
          followUp: `LIAN is slightly taken aback`,
          setTag: "market_selfaware",
          bonusIfTags: [
            {
              tags: ["kai_notices_world", "kai_admires_disorder"],
              mode: "any",
              audience: 1,
              risk: 0
            }
          ]
        }
      ]
    },

    {
      type: "text",
      text: `The woman serves them without further ceremony. The skewer is hotter than either expected. Lian burns his fingers and curses loudly. Some nearby customers look over. 

  A boy at the next stall stares openly at them until his mother says something sharp and sends him away. Kai chortles at that, but stops when he sees Lian's face. 

  For a moment, the market ceases to feel like a backdrop and becomes a place that has noticed them in return. They feel uneasy.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Acknowledge that they are being read as well.",
          text: `KAI
  We have spent years learning how to observe a room. I am less certain we remember how it feels to be observed by one.`,
          audience: 2,
          qtag: -1,
          risk: -1,
          followUp: `LIAN 
  Perhaps at home we like to imagine that noticing only travels one way.

  KAI
  Could not have spoken truer.`,
          setTag: "mutual_observation_named"
        },
        {
          prompt: "Defuse it with humor.",
          text: `KAI
  Let us hope we appear more interesting than officious.`,
          audience: 2,
          qtag: 0,
          risk: 1,
          followUp: `LIAN
  Given your face eating the skewer, I don't doubt it.

  Kai laughs and punches Lian's shoulder gently.`
        },
        {
          prompt: "Shut the moment down.",
          text: `KAI
  Just wait for it to cool.`,
          audience: -1,
          qtag: -2,
          risk: -3,
          followUp: `Lian bites into the skewer anyway.

  Whatever thought had nearly formed is left without ceremony.`,
          penaltyIfTags: [
            {
              tags: ["market_selfaware", "mutual_observation_named"],
              mode: "any",
              audience: -2,
              qtag: -1,
              risk: -1
            }
          ]
        }
      ]
    },

    {
      type: "text",
      requiresTag: "mutual_observation_named",
      text: `A second child peers around a post to look at them, then whispers something to the first. The whisper produces a burst of laughter neither Kai nor Lian can place.

  The uncertainty is small. It is also exact. For once, not knowing does not humiliate either of them.`
    },

    {
      type: "choice",
      requiresTag: "market_selfaware",
      choices: [
        {
          prompt: "Accept being unreadable here.",
          text: `KAI
  I do not know whether they find us amusing, rude, or forgettable. That may be the cleanest fact available to us tonight.`,
          audience: 3,
          qtag: 0,
          risk: 1,
          followUp: `LIAN
  You say that as though uncertainty had become a discipline.`,
          setTag: "kai_accepts_market_uncertainty"
        },
        {
          prompt: "Try to reclaim confidence.",
          text: `KAI
  If they are laughing, I hope at least I have earned it for something interesting.`,
          audience: 1,
          qtag: 0,
          risk: 0,
          followUp: `LIAN
  There. The old vanity survives after all.`
        },
        {
          prompt: "Let the silence hold its place.",
          text: `KAI
  ...`,
          audience: 2,
          qtag: 0,
          risk: 0,
          followUp: `A cart passes between them and the stall.

  By the time the noise has moved on, so has the moment. Neither man has much desire left to question the moment.`,
          setTag: "kai_lets_market_stand"
        }
      ]
    },

    {
      type: "text",
      text: `Later, as they cross the square, music swells from a raised platform near the tea stalls. Three women move in a circle with lamp bowls balanced in both hands, while an old man behind them marks the rhythm by striking wood against wood. The surrounding crowd watches without the reverence of a ceremony and without the carelessness of a casual performance. The distinction is plain. The meaning is not.

  LIAN
  If I were writing the report tonight, I would not know what category to force this into.

  A child cuts between them at a run, nearly dropping a bundle of cloth. Lian steps back to let him pass.

  Only then does Kai speak.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Criticize the category itself.",
          text: `KAI
  No. That is the trouble with categories. They are often most certain where understanding is weakest.`,
          audience: 4,
          qtag: 1,
          risk: 2,
          followUp: `LIAN
  I wish our instructors had once been honest enough to phrase it that way.`,
          setTag: "kai_attacks_categories"
        },
        {
          prompt: "Answer with caution.",
          text: `KAI
  The report would ask whether it is taxable, tolerated, or prohibited, and call the answer clarity.`,
          audience: 3,
          qtag: 0,
          risk: 1,
          followUp: `Lian can only chuckle in agreement`
        },
        {
          prompt: "Avoid the philosophical turn.",
          text: `KAI
  Tonight you are not writing it.`,
          audience: 1,
          qtag: -1,
          risk: -1,
          followUp: `Lian sighs. He rubs his temples.

          LIAN
  No. Tonight I am only postponing it.`,
          setTag: "kai_postpones_questions"
        }
      ]
    },

    {
      type: "text",
      text: `As they leave the market. they journey up until they find an inn topping the edge of the river road, where the lamps burn low and the roof beams lack pigment. Lian is leading the way up a set of stairs.

  As they climb, Lian glances back above Kai toward the square, back at the market with its bright lights and distant noises.

  LIAN
  I have never felt this way before. Everywhere we go, I feel as though something had already begun before we arrived. 

  He turns back and continues up the stairs.

  LIAN (CONT'D)
  And will continue on long after we leave.

  Kai takes a couple steps before answering.

  KAI
  That may be the first accurate thing either of us has said about this place.

  Lian looks back at him briefly but continues climbing. He does not object. Kai takes a breath.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Deepen that realization.",
          text: `KAI
  At home we were taught to think any place became clear once it could be described from afar. I'm starting to think we mistaked distance for understanding.`,
          audience: 5,
          qtag: 1,
          risk: 2,
          setTag: "distance_not_understanding",
          bonusIfTags: [
            {
              tags: ["market_selfaware", "kai_attacks_categories"],
              mode: "any",
              audience: 1,
              risk: 0
            }
          ]
        },
        {
          prompt: "Keep it half-jesting.",
          text: `KAI
  Then perhaps the place will survive without requiring our permission.`,
          audience: 2,
          qtag: 0,
          risk: 0,
          followUp: `LIAN
  A comforting thought.`
        },
        {
          prompt: "Turn back to practical matters.",
          text: `KAI
  The place can continue without us. These stairs will not climb themselves.`,
          audience: 0,
          qtag: -1,
          risk: -2,
          followUp: `The moment closes, though not cleanly.`,
          penaltyIfTags: [
            {
              tags: ["kai_open_start", "kai_reads_lian"],
              mode: "any",
              audience: -2,
              risk: -1
            }
          ]
        }
      ]
    },

    // =========================
    // ACT III — THE ROOM
    // =========================

    {
      type: "text",
      text: `INT. INN ROOM — NIGHT

  The room is narrow and clean, with plaster walls burnished by age, a table between two beds, and one window opening toward the village below. The sounds of the courtyard rise and blur, then fall away again. Somewhere beneath them, someone is still arguing over the price of something small and necessary.
  The two men rest their swords against the wall nearest their beds. Kai sits on his.

  Lian, standing, sets the packet on the table his hand still resting on it. He stares at the report.

  LIAN
  If I deliver that report, I become useful to men who have never had to stand in a square like the one below and admit they do not understand what they are rearranging.

  Kai is silent for a moment. He too has felt differently in that square.

  KAI
  If you do not deliver it, you make yourself visible to the same men. Do not pick a foolish option.

  LIAN
  I know.

  He says it with weight.`  },

    {
      type: "choice",
      choices: [
        {
          prompt: "Acknowledge the personal cost directly.",
          text: `KAI
  Then the question is not whether there is a cost. It is whether you can live with changing this place to be like the others`,
          audience: 3,
          qtag: 1,
          risk: 2,
          followUp: `LIAN does not respond. His eyes are fixated upon the oilskinned package`,
          setTag: "room_cost_named"
        },
        {
          prompt: "Counsel caution.",
          text: `KAI
  Then choose a path that does not force you into heroics for the satisfaction of men who would happily record your failure afterward.`,
          audience: 3,
          qtag: 0,
          risk: 0,
          setTag: "kai_measured_caution"
        },
        {
          prompt: "Prioritize safety bluntly.",
          text: `KAI
  Then burn it and go farther south.`,
          audience: 2,
          qtag: -1,
          risk: 4,
          followUp: `LIAN
  Ha! As if geography makes for a moral argument.`,
          setTag: "kai_escape_advice"
        }
      ]
    },

    {
      type: "text",
      requiresTag: "kai_names_violence",
      text: `Lian lifts his hand. Kai's eyes go first not to the seal but to Lian's hand.

  The fingers are steadier than the act deserves.

  That too is old training. How to appear composed while crossing a threshold no instructor intended you to survive intact.`
    },

    {
      type: "text",
      requiresTag: "kai_retreats_to_office",
      text: `Lian does not look angry.

  Kai has seen that stillness before. It is the narrow pause before a man decides whether expressing disappointment is worth the labor of speech.`
    },

    {
      type: "choice",
      requiresTag: "kai_retreats_to_office",
      choices: [
        {
          prompt: "Correct himself before Lian must force it.",
          text: `KAI
  No. I am sorry. That was an office speaking through me. I should not have let it.`,
          audience: 4,
          qtag: 1,
          risk: 1,
          followUp: `LIAN
  No, you are right. I need to think.`,
          setTag: "kai_corrects_office_voice",
          bonusIfTags: [
            {
              tags: ["kai_reads_lian", "kai_asks_moral"],
              mode: "any",
              audience: 1,
              risk: 0
            }
          ]
        },
        {
          prompt: "Defend his response.",
          text: `KAI
  You know I have your best interests at heart. I do not mean to be harsh.`,
          audience: -2,
          qtag: -1,
          risk: -2,
          followUp: `LIAN nods, his eyes closed`,
          setTag: "kai_doubles_down_office"
        },
        {
          prompt: "Sidestep into the report itself.",
          text: `KAI
  Show me the page they would quote first.`,
          audience: 2,
          qtag: 0,
          risk: 0,
          setTag: "kai_sidesteps_with_intelligence"
        }
      ]
    },

    {
      type: "text",
      text: `Lian unties the dark thread but does not yet break the seal.

  LIAN
  I do not know whether I withheld it for them or for myself.

  KAI
  You mean for the people here.

  LIAN
  I mean for what I would become if I handed them over in clean language. I am not frightened only for them. I am frightened by how easily I was taught to make such things sound reasonable. We both know all too well the kind of man who can do that and still sleep afterward. We have spent years being trained to resemble him.

  For a moment, the room is very still.

  Outside, a couple chairs scrape against stone and are dragged away, followed by fading voices. The sound seems to mark the silence rather than interrupt it.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Answer with blunt understanding.",
          text: `KAI
  Those are not separate motives, Lian. That is the lie our world prefers. Self preservation is not shameful`,
          audience: 5,
          qtag: 2,
          risk: 3,
          followUp: `Lian lowers his head briefly, not in submission but in weary recognition.`,
          setTag: "kai_merges_private_public"
        },
        {
          prompt: "Answer carefully.",
          text: `KAI
  A man is not made less moral for asking what an act will make of him after he has done it`,
          audience: 4,
          qtag: 0,
          risk: 1,
          followUp: `LIAN
  No. Only more honest than most reports allow.`
        },
        {
          prompt: "Steer away from the confession in it.",
          text: `KAI
  Motive matters less than what you intend to do now.`,
          audience: 0,
          qtag: -2,
          risk: -2,
          followUp: `LIAN
  You can only say that because looking backward makes the truth harder to avoid`,
          setTag: "kai_resists_personal"
        }
      ]
    },

    {
      type: "text",
      text: `Lian sits down heavily and reaches for the packet. His fingers hesitate, and then he breaks the seal. He slowly pulls the parchment out. The report is written in the narrow, disciplined hand he acquired under the same instructors as Kai. That alone is enough to make it feel accusatory.

  He reads aloud only fragments.

  LIAN
  Rumours have surfaced about a river village in the North. 

  His eyes skim the text until they reach about halfway down the paper. 

  LIAN
  "Unregulated evening gatherings" ... "Local rites of uncertain standing." ... "Common use of speech unsuitable for formal record." ... "Patterns of exchange resistant to standard measure." 

  He murmurs to himself until he reaches the bottom.

  LIAN
  "Officials must bring back detailed accounts sufficient for classification, assessment, and future administrative action." 

  He lowers the page.

  LIAN
  We were taught to believe that if a sentence sounded official enough, it had ceased to be cruel.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Answer with relativity",
          text: `KAI
  And we were taught to make refusal look like disorder. It is only what was instilled in us. Do you feel that way now?`,
          audience: 5,
          qtag: 2,
          risk: 2,
          followUp: `LIAN
  I rue myself for learning that lesson too well.`,
          setTag: "kai_names_training_harm"
        },
        {
          prompt: "Answer in the language of revision.",
          text: `KAI
  Then rewrite the sentence before it becomes someone else's weapon.`,
          audience: 3,
          qtag: 0,
          risk: 1,
          followUp: `Lian runs his thumb once over paper.`
        },
        {
          prompt: "Answer with sympathetic institutional realism",
          text: `KAI
  Official language was built precisely so no one has to sound cruel while being obeyed.`,
          audience: 2,
          qtag: -2,
          risk: -2,
        }
      ]
    },

    {
      type: "text",
      text: `Lian sighs and sets the pages down.

  LIAN
  And if I rewrite it, do I change anything? Or do I only become a more elegant liar?

  Kai edges closer to the table. He rests an elbow on the small table, and looks towards a side wall.

  KAI
  That depends on what you choose to be the lesser harm.

  Lian looks at him.

  LIAN
  You should have become a prosecutor.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Answer dryly, but personally.",
          text: `KAI
  I lacked the patience to pretend precision and mercy were complements.`,
          audience: 1,
          qtag: 0,
          risk: 0,
        },
        {
          prompt: "Let the intimacy show.",
          text: `KAI
  No. I was always going to end up wherever your worst decisions eventually required a witness.`,
          audience: 5,
          qtag: 3,
          risk: 4,
          followUp: `A beat, then a sound from the courtyard rises sharply and fades again.

  Neither of them immediately pretends the line was lighter than it was. They turn to the window almost too quickly.`,
          setTag: "kai_names_himself_witness"
        },
        {
          prompt: "Retreat before the moment tips too far.",
          text: `KAI
  You asked for advice, not a career history.`,
          audience: 0,
          qtag: -1,
          risk: -3,
          penaltyIfTags: [
            {
              tags: ["kai_open_start", "kai_reads_lian", "room_cost_named"],
              mode: "any",
              audience: -2,
              qtag: -1,
              risk: -1
            }
          ]
        }
      ]
    },

    {
      type: "text",
      text: `The courtyard below fills briefly with song. An unpolished, collective sound of people whose day has ended and who are not yet ready to let silence claim the rest of it.

  Lian goes to the window. He peers downwards.

  LIAN
  At home this would already have been reported as noise.

  He listens a moment longer.

  LIAN (CONT'D)
  A man could almost mistake this road for exile, if he were in a generous mood.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Refuse the word exile.",
          text: `KAI
  Do not flatter the road into something grand. We have not suffered enough to deserve poetry for it.`,
          audience: 1,
          qtag: 0,
          risk: 0,
        },
        {
          prompt: "Turn the line towards them.",
          text: `KAI
  If this is exile, it has only shown me how much of my speech depended on walls I did not choose.`,
          audience: 5,
          qtag: 1,
          risk: 2,
          followUp: `LIAN turns to him`,
          setTag: "speech_depends_on_walls"
        },
        {
          prompt: "Flatten the moment into weariness.",
          text: `KAI
  I will improve through rest, not exile.`,
          audience: 1,
          qtag: 0,
          risk: -1,
          followUp: `Lian laughs despite himself.`
        }
      ]
    },

    {
      type: "text",
      text: `The song below fades.

  LIAN
  Kai.

  He says the name without title, without distance.

  LIAN (CONT'D)
  What will become of us once we are no longer officers of the court? I mean, we have known nothing but duty.

  The question settles into the room and makes every ordinary object inside it seem suddenly too deliberate: the flame in the lamp, the dry basin, the folded blankets. The parchment, slightly raised from its crease shifts from the breeze.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Answer with the fullest honesty the room can bear.",
          text: `KAI
  We will be what we have been for longer than either of us has allowed language to admit.`,
          audience: 5,
          qtag: 4,
          risk: 4,
          followUp: `Lian tilts his head. 

          LIAN
  Those are not proper words either.`,
          setTag: "kai_names_unspeakable_bond",
          bonusIfTags: [
            {
              tags: ["speech_depends_on_walls", "kai_names_himself_witness"],
              mode: "any",
              audience: 1,
              qtag: 0,
              risk: 0
            }
          ]
        },
        {
          prompt: "Answer with disciplined ambiguity.",
          text: `KAI
  We are two men who have simply trusted each other.`,
          audience: 4,
          qtag: 1,
          risk: 2,
          followUp: `LIAN
  That is just evasive enough to be sincere from you.`,
          setTag: "kai_disciplined_ambiguity"
        },
        {
          prompt: "Answer in the language of duty.",
          text: `KAI
  We are what years of shared work and shared danger have made us.`,
          audience: 1,
          qtag: -2,
          risk: -4,
          followUp: `LIAN
  And if I asked whether that were enough?`,
          setTag: "kai_hides_in_duty",
          penaltyIfTags: [
            {
              tags: ["kai_reads_lian", "kai_open_start", "room_cost_named"],
              mode: "any",
              audience: -3,
              qtag: -1,
              risk: -1
            }
          ]
        }
      ]
    },

    {
      type: "text",
      requiresTag: "kai_names_unspeakable_bond",
      text: `Titles could be worn like lacquer. Roles could be stood inside. But names, names carry the person beneath the office.

  Kai knows this as soon as Lian says his name that way, and Lian knows that he knows.`
    },

    {
      type: "choice",
      requiresTag: "kai_hides_in_duty",
      choices: [
        {
          prompt: "Admit duty is no longer enough.",
          text: `KAI
  Do not mistake me. Duty is real. It is simply no longer sufficient.`,
          audience: 4,
          qtag: 2,
          risk: 2,
          followUp: `Lian is silent. His face betrays no emotion`,
          setTag: "kai_duty_not_enough"
        },
        {
          prompt: "Admit they are strictly duty bound.",
          text: `KAI
  We are bound by what we have survived, what we were trained to do, and what still remains to be answered for. I do not mean to make it more mysterious than that.`,
          audience: 1,
          qtag: -2,
          risk: -2,
          followUp: `Lian waits. The lamp flame moves once and steadies.

  LIAN
  Yes. I think you are right.`,
          setTag: "kai_hides_deeper"
        },
        {
          prompt: "Go quiet because he cannot answer cleanly.",
          text: `KAI
  ...`,
          audience: 2,
          qtag: 0,
          risk: 0,
          followUp: `Lian waits. The lamp flame moves once and steadies.

  LIAN
  There are silences that protect and silences that confess. I am trying to decide which one this is.`,
          setTag: "kai_confessing_silence_room"
        }
      ]
    },

    // =========================
    // ACT IV — ROAD AND SHRINE
    // =========================

    {
      type: "text",
      text: `CUT TO:

  EXT. RIVER ROAD — MORNING

  Morning burns the mist off slowly.

  They leave the inn at first light and follow the road beside the river. Women kneel at the bank washing cloth against flat stones. Two fishing skiffs move through the current with painted eyes on their prows. Prayer flags, old enough to be more thread than fabric at times, cross from one roof to another over the road and turn in the wind.

  The world here offers itself in fragments, not explanations. Kai is the first to speak`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Pay attention to the world.",
          text: `KAI
  We were taught that a place becomes legible once enough of it is named. I am no longer certain naming and knowing were ever as closely related as we were promised.`,
          audience: 5,
          qtag: 0,
          risk: 1,
          followUp: `LIAN
  That would have scandalized half our instructors.`,
          setTag: "kai_questions_legibility"
        },
        {
          prompt: "Stay practical.",
          text: `KAI
  I think I would still know enough in any foreign land to tell where the road bends.`,
          audience: 2,
          qtag: -1,
          risk: -1,
          followUp: `LIAN
  You insist on remaining useful even when the world is trying to become interesting.`
        },
        {
          prompt: "Perceive with quiet wonder.",
          text: `KAI
  Perhaps naming was only ever the smaller art.`,
          audience: 4,
          qtag: 1,
          risk: 2,
          followUp: `LIAN
  And what would be the larger?

  KAI
  Looking.` ,
          setTag: "kai_quiet_wonder"
        }
      ]
    },

    {
      type: "text",
      text: `They walk in silence for a time after that. A measured silence. The kind shared by people who already know where the other will place a foot on loose ground. Ahead, a small roadside platform has been built around the roots of a leaning cedar. Bowls of fruit have been left there, along with strips of folded paper gone damp at the edges.

  Lian slows.

  LIAN
  At home, the report would call that superstition before anyone asked whose dead are remembered there.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Sharpen the criticism.",
          text: `KAI
          Of course. Then they no longer have to ask what is being remembered.`,
          audience: 5,
          qtag: 1,
          risk: 2,
          followUp: `LIAN
  Now you sound like a man who means not to return politely.`,
          setTag: "kai_critique_rank"
        },
        {
          prompt: "Answer with bitter humor.",
          text: `KAI
  Certainty is cheaper. It requires fewer clerks and less conscience.`,
          audience: 3,
          qtag: -2,
          risk: 1,
        },
        {
          prompt: "Keep the thought contained.",
          text: `KAI
  The report would not be the first document to mistake unfamiliar practice for error.`,
          audience: 3,
          qtag: 1,
          risk: 0,
          setTag: "kai_contained_shrine_thought"
        }
      ]
    },

    {
      type: "text",
      text: `Farther on, the road narrows at a checkpoint where two local guards, not of their own administration, stand beneath a painted lintel and inspect carts for axle tax. One of them speaks to Kai. Kai does not understand. The guard repeats himself more slowly, which does not help. Lian watches the exchange and, for once, does not intervene immediately.

  A line forms behind them. The moment lengthens. Kai becomes visibly flustered. As an official, to fail to understand in private is one thing. To fail in a queue is another.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Accept the humility.",
          text: `Kai turns to Lian helplessly.
          
          KAI
  I am at the end of my wits. I do not know what to do`,
          audience: 4,
          qtag: -2,
          risk: 0,
          followUp: `Lian chuckles.

          LIAN
  That may be the most respectable thing I have heard from you in years.

  Lian produces his seal. The guard examines it and then waves them through.`,
          setTag: "kai_public_humility",
          bonusIfTags: [
            {
              tags: ["market_selfaware", "kai_questions_legibility"],
              mode: "any",
              audience: 1,
              qtag: 0,
              risk: 0
            }
          ]
        },
        {
          prompt: "Gesture through the confusion.",
          text: `Kai turns to Lian helplessly.

          KAI
  Give me a hand, will you?

  He turns back to the guard

  KAI (CONT'D)
  Forgive me. We are only passing through. Tell me where to stand and I will obey it.`,
          audience: 3,
          qtag: 0,
          risk: 2,
          followUp: `LIAN
  You say "obey" beautifully when you want something.

  Lian pulls from within his robe his seal. The guard examines it and then waves them through. Lian shakes his head.`
        },
        {
          prompt: "Reach for old authority.",
          text: `KAI
  We are on official business and have no interest in delaying the road further.`,
          audience: -1,
          qtags: 0,
          risk: 2,
          followUp: `The guard blinks. And then repeats the same phrase again. Lian sighs and reaches for his seal. The guard examines it and then waves them through. Lian shakes his head.
          
          LIAN
          Heaven forbid a checkpoing survive an encounter with official business.`,
          setTag: "kai_uses_authority",
          penaltyIfTags: [
            {
              tags: ["market_selfaware", "mutual_observation_named"],
              mode: "any",
              audience: -3,
              qtag: 0,
              risk: 1
            }
          ]
        }
      ]
    },

    {
      type: "text",
      text: `LIAN
  There. That is what I mean. One difficult moment and we reach for rank, fluency, or private understanding as though the world owed us one of them.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Accept the rebuke fully.",
          text: `KAI
  Yes. Because we were taught to believe inconvenience was beneath us. It is how we were raised.`,
          audience: 3,
          qtag: 1,
          risk: 1,
          followUp: `LIAN
  And being raised inside a habit is not the same as choosing to keep it.`,
          setTag: "kai_accepts_rebuke"
        },
        {
          prompt: "Half-defend himself.",
          text: `KAI
  I know. I reached for habit, not superiority. I admit the distance between those is smaller than I would like.`,
          audience: 3,
          qtag: 0,
          risk: 0,
          setTag: "kai_half_defends"
        },
        {
          prompt: "Overcorrect into formality.",
          text: `KAI
  Then I will endeavor to inconvenience us more respectfully next time.`,
          audience: -1,
          qtag: -1,
          risk: -2,
          followUp: `LIAN
  That is a polished way to tell me you dislike being corrected.`,
          penaltyIfTags: [
            {
              tags: ["kai_public_humility", "market_selfaware"],
              mode: "any",
              audience: -2,
              qtag: 0,
              risk: -1
            }
          ]
        }
      ]
    },

    {
      type: "text",
      text: `CUT TO:

  EXT. HILLSIDE SHRINE — LATE AFTERNOON

  The shrine is smaller than the report suggested and older than anything in it has leave to look. Painted beams peel in narrow curls. A bowl of pears has been set at the steps. Incense smoke moves through cedar shade like something unsure whether to stay.

  An old caretaker sweeps leaves from the stone path with a branch broom. A couple children sit under the eaves threading beads onto red string. Neither looks surprised to see travelers.

  That, more than any welcome, makes the place feel entirely itself.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Treat the place with quiet respect.",
          text: `KAI
  We should stand where we are wanted, not merely where we are able.`,
          audience: 2,
          qtag: 0,
          risk: 0,
          followUp: `Lian follows his lead`,
          setTag: "kai_respects_shrine"
        },
        {
          prompt: "Say what the report failed to.",
          text: `KAI
  Strange. The report made this sound dangerous. It only sounds inhabited.`,
          audience: 2,
          qtag: 0,
          risk: 1,
          followUp: `LIAN
  To certain men, that is the same thing.`,
          setTag: "kai_sees_inhabited"
        },
        {
          prompt: "Remain wary.",
          text: `The pair slowly move towards the caretaker, knowing a place can be peaceful and still dangerous to those who misunderstand it.`,
          audience: 1,
          qtag: 0,
          risk: 0,
          setTag: "kai_wary_at_shrine"
        }
      ]
    },

    {
      type: "text",
      text: `The caretaker says something to them in the local tongue and points for them to move, not to the inner hall, but to the side path beneath the cedar.

  Lian looks at Kai.

  LIAN
  We do not know whether we were welcomed or gently removed.

  KAI
  Either would be fair.

  They move to the side path.

  From there, they can see the river road below through the trees. Bells answer bells across the valley, not in ritual unison but in practical intervals, as though news and labor travel by sound here as much as by ink.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Say aloud what they both already know",
          text: `KAI
  We have been speaking as though this road, this market, this shrine existed to hold our uncertainty until we had the courage to call it something else.`,
          audience: 5,
          qtag: 2,
          risk: 3,
          followUp: `LIAN
  Indeed.`,
          setTag: "kai_names_selfie_of_other",
          bonusIfTags: [
            {
              tags: ["market_selfaware", "distance_not_understanding", "kai_accepts_rebuke"],
              mode: "any",
              audience: 1,
              qtag: 0,
              risk: 0
            }
          ]
        },
        {
          prompt: "Ponder the purpose of this village",
          text: `KAI
  I think we have been borrowing this place for meanings it did not ask to carry.`,
          audience: 2,
          qtag: 0,
          risk: 1,
          followUp: `LIAN
  That is a gentler way of accusing us, but yes.`,
          setTag: "kai_names_borrowing"
        },
        {
          prompt: "Continue observing.",
          text: `KAI
  I think this journey has not clarified as much as we imagined.`,
          audience: 2,
          qtag: 0,
          risk: -1,
          followUp: `LIAN
  No. Only our excuses.`,
          setTag: "kai_stops_short"
        }
      ]
    },

    {
      type: "text",
      text: `They stop under a tree. Lian leans one shoulder against the cedar trunk.

  LIAN
  I thought distance would make the truth easier to say.

  KAI
  Did it?

  LIAN
  No. It only taught me how long I had been waiting for somewhere else to do the work of honesty for me.

  The child under the eaves laughs at something unheard and holds up the finished string of beads to the caretaker, who nods without turning. The gesture is complete without requiring witnesses.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Meet him fully in that realization.",
          text: `KAI
  Then we should stop asking borrowed ground to excuse what belongs to us. It was never the road that kept us silent.`,
          audience: 5,
          qtag: 3,
          risk: 3,
          followUp: `LIAN
  That sounds almost like courage.`,
          setTag: "kai_refuses_borrowed_ground"
        },
        {
          prompt: "Answer with restraint and clarity.",
          text: `KAI
  Then let the road remain only a road. We still have to decide for ourselves what we can defend when we return.`,
          audience: 5,
          qtag: -2,
          risk: -3,
          followUp: `LIAN
  You do have a talent for making honesty sound like a briefing.`,
          setTag: "kai_road_only_road"
        },
        {
          prompt: "Let the silence risk speaking for him.",
          text: `Kai remains silent.`,
          audience: 2,
          qtag: 0,
          risk: 0,
          setTag: "kai_fails_silence_here",
          penaltyIfTags: [
            {
              tags: ["kai_disciplined_ambiguity", "kai_hides_in_duty"],
              mode: "any",
              audience: -2,
              qtag: 0,
              risk: 0
            }
          ]
        }
      ]
    },

    // =========================
    // ACT V — THE RIDGE AGAIN
    // =========================

    {
      type: "text",
      text: `CUT TO:

  EXT. RIDGE ABOVE THE RIVER ROAD — SUNSET

  By the time they reach the ridge again, the light has thinned into copper at the horizon and blue everywhere else. Below them, the evening road fills and empties in pulses: carts, voices, smoke, bells, cooking fires, a dog barking once and then losing interest.

  The world below is still full. It remains itself whether or not they are equal to what they have learned from passing through it.

  Lian has the report pages out in one hand. It is clear neither of them wants to see it returned.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Reject both obedience and ruin.",
          text: `KAI
  Do not abandon it to feel pure. Do not deliver it to feel blameless. Report what you can bear to defend, and refuse the parts that require a lie.`,
          audience: 5,
          qtag: 1,
          risk: 2,
          setTag: "kai_refuses_false_extremes"
        },
        {
          prompt: "Urge open refusal.",
          text: `KAI
  Return it unanswered if you must. Some documents deserve the insult of incompletion.`,
          audience: 3,
          qtag: 3,
          risk: 4,
          setTag: "kai_open_refusal"
        },
        {
          prompt: "Urge strategic revision.",
          text: `KAI
  Strip it of certainty. Make it slow. Make it unprofitable to men who wanted quick decisions dressed as order.`,
          audience: 4,
          qtag: -2,
          risk: 1,
          followUp: `LIAN
  There is the tactician I expected all along.`,
          setTag: "kai_strategic_revision"
        }
      ]
    },

    {
    type: "text",
    text: `Lian looks at the pages for a long time. Then he folds them once along an old crease. Then again. And again, as though reducing them to a size that can be carried without reverence.

  LIAN
  I brought you here because I trusted your judgment.

  He glances sideways.

  LIAN
  That was the respectable reason.

  Kai waits.

  LIAN
  The less respectable one is harder to phrase without sounding unlike myself.

  Below them, a train of pack animals rounds the bend in the road. Their bells do not harmonize. The sound is better for it.`
  },
  {
    type: "choice",
    choices: [
      {
        prompt: "Let him speak in the language of brotherhood.",
        text: `LIAN (CONT'D)
  The less respectable reason is that I did not know whether you would still stand with me once I chose to leave the administration behind.`,
        audience: 3,
        qtag: -1,
        risk: 1,
        setTag: "lian_names_departure_allegiance"
      },
      {
        prompt: "Let him speak in the language of uncertainty.",
        text: `LIAN (CONT'D)
  The less respectable reason is that the words I would once have used now feel too orderly for what stands between us.`,
        audience: 4,
        qtag: 1,
        risk: 2,
        setTag: "lian_names_disordered_language"
      },
      {
        prompt: "Let him speak in the language of passion.",
        text: `LIAN (CONT'D)
  The less respectable reason is that I no longer know how to speak of you as though duty, history, or loyalty were equal to the truth.`,
        audience: 5,
        qtag: 3,
        risk: 4,
        setTag: "lian_names_truth_beyond_duty"
      }
    ]
  },
  {
    type: "choice",
    requiresTag: "lian_names_departure_allegiance",
    choices: [
      {
        prompt: "Answer with immediate loyalty.",
        text: `KAI
  You should not have had to doubt that. If you leave it behind, I do not begin thinking less of you. I begin thinking more honestly.`,
        audience: 4,
        qtag: 0,
        risk: 1,
        setTag: "kai_affirms_departure_loyalty"
      },
      {
        prompt: "Answer with restrained reassurance.",
        text: `KAI
  Then let me spare you that uncertainty now. Whatever else changes, I would not set myself against you for leaving it behind.`,
        audience: 4,
        qtag: 1,
        risk: 2,
        setTag: "kai_restrained_departure_reassurance"
      },
      {
        prompt: "Answer by meeting the feeling beneath it.",
        text: `KAI
  Lian, if that was what kept you silent, you have been carrying the wrong fear. I was never going to lose you to the office in my mind.`,
        audience: 5,
        qtag: 4,
        risk: 4,
        setTag: "kai_meets_departure_with_feeling"
      }
    ]
  },
  {
    type: "choice",
    requiresTag: "lian_names_disordered_language",
    choices: [
      {
        prompt: "Pull the moment back into steadiness.",
        text: `KAI
  Then we may not need better language yet. Only enough honesty not to hide behind the old one.`,
        audience: 3,
        qtag: 0,
        risk: 0,
        setTag: "kai_enough_honesty_no_more"
      },
      {
        prompt: "Answer with restrained recognition.",
        text: `KAI
  I know. I have run up against the same limit myself and found no cleaner words for it.`,
        audience: 4,
        qtag: 1,
        risk: 2,
        setTag: "kai_shares_disorder"
      },
      {
        prompt: "Meet him fully in that uncertainty.",
        text: `KAI
  Then perhaps confusion is only what honesty feels like before it learns to speak plainly.`,
        audience: 5,
        qtag: 3,
        risk: 3,
        setTag: "kai_honesty_before_plain_speech"
      }
    ]
  },
  {
    type: "choice",
    requiresTag: "lian_names_truth_beyond_duty",
    choices: [
      {
        prompt: "Answer by choosing allegiance.",
        text: `KAI
  Then let me say only this plainly: whatever name fails us, I would still stand with you when we return.`,
        audience: 4,
        qtag: 2,
        risk: 2,
        setTag: "kai_chooses_allegiance"
      },
      {
        prompt: "Answer with intimate restraint.",
        text: `KAI
  I know. I have been trying to speak around the same truth for longer than I care to admit.`,
        audience: 5,
        qtag: 3,
        risk: 3,
        setTag: "kai_speaks_around_same_truth"
      },
      {
        prompt: "Answer with his clearest truth.",
        text: `KAI
  Then stop asking duty to contain what it never could. I ceased believing those words were equal to it a long time ago.`,
        audience: 5,
        qtag: 3,
        risk: 5,
        setTag: "kai_clearest_truth"
      }
    ]
  },
  {
    type: "text",
    text: `Lian laughs once under his breath, but there is no mockery in it now.

  LIAN
  I expected the truth to sound grander after all this delay.

  KAI
  That was your first mistake.

  LIAN
  Only the first?

  KAI
  No.`
  },
  {
    type: "choice",
    choices: [
      {
        prompt: "Let tenderness enter the pause.",
        text: `KAI
  Your second mistake was thinking time would make honesty safer. It only made silence easier to practice.`,
        audience: 5,
        qtag: 3,
        risk: 3,
        followUp: `LIAN
  Yes. That sounds familiar.`,
        setTag: "kai_time_not_safety"
      },
      {
        prompt: "Answer with steadiness.",
        text: `KAI
  Your second mistake was underestimating how stubborn you become once you decide not to let a lie sit between us.`,
        audience: 4,
        qtag: 1,
        risk: 1,
        followUp: `LIAN
  And here I thought you found that tiring.`,
        setTag: "kai_admires_lian_persistence"
      },
      {
        prompt: "Make light of the moment",
        text: `KAI
  Your second mistake was climbing this mountain without provisions.`,
        audience: 1,
        qtag: -2,
        risk: -2,
        followUp: `Lian looks at him, then away again with a dry laugh, as though mercy has arrived in an unconvincing disguise.`,
        setTag: "kai_makes_light_of_it"
      }
    ]
  },

    {
      type: "text",
      text: `Below them, the road continues to take carts and voices around the bend. Dust lifts, then settles again. Nothing in the valley pauses for them. It makes the moment easier to bear.

  Lian tucks the pages back inside his robe. His hand lingers there only briefly. Then he gestures at the path and they begin walking again. A beat passes.

  LIAN
  We will have to go back to the office.

  KAI
  If you so choose.

  LIAN
  You say that as though it is not a choice. Refusal will be a catastrophe.

  KAI
  It may still be one regardless. That is different from it being avoidable.

  Lian stops. Kai continues but for a moment. He notices and stops as well. Lian speaks stiffly.

  LIAN
  That is a calm way to speak of ruin.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Commit to the road beside him.",
          text: `KAI
  Then let it be a ruin we answer together.`,
          audience: 5,
          qtag: 4,
          risk: 4,
          setTag: "kai_together_against_return"
        },
        {
          prompt: "Phrase it as disciplined solidarity.",
          text: `KAI
  Then if you would like we return with one account, not two, and we do not let them divide duty from conscience`,
          audience: 3,
          qtag: 1,
          risk: 1,
          setTag: "kai_shared_account"
        },
        {
          prompt: "Keep it practical and loyal.",
          text: `KAI
  Then you will not stand before them without an ally.`,
          audience: 2,
          qtag: -1,
          risk: -2,
          setTag: "kai_will_not_leave"
        }
      ]
    },

    {
      type: "text",
      text: `They both look out over the valley. 

    Below them, the first evening lamps gather in windows along the road. The sound of bells keep moving through the rocky cliffs.`
    },

    {
      type: "choice",
      choices: [
        {
          prompt: "Close the distance without spectacle.",
          text: `Kai does not step away. After a moment, he steps towards Lian and lets the space between their sleeves disappear as if it had always been the least consequential thing in the world.`,
          audience: 5,
          qtag: 4,
          risk: 3,
          setTag: "final_closeness"
        },
        {
          prompt: "Remain in stillness and let the moment through.",
          text: `Kai remains where he is and lets the nearness stand, observing Lian`,
          audience: 3,
          qtag: 1,
          risk: 1,
          setTag: "final_stillness"
        },
        {
          prompt: "Reassure with a smile",
          text: `Kai breaks into a smile and walks back to pat Lian on the back.
          
          KAI
          All will be well. Trust me.`,
          audience: 4,
          qtag: -2,
          risk: -2,
          setTag: "final_words_over_touch"
        }
      ]
    },
    
  ]
