export type TransitionType =
  | 'Contrast'
  | 'Cause & Effect'
  | 'Addition'
  | 'Examples'
  | 'Similarity'
  | 'Clarification'
  | 'Alternatives'
  | 'Sequence';

export interface Transition {
  word: string;
  type: TransitionType;
  usage: string;
}

export const TRANSITIONS: Transition[] = [
  // Contrast
  { word: 'however', type: 'Contrast', usage: 'The plan seemed sound; however, it lacked funding.' },
  { word: 'nevertheless', type: 'Contrast', usage: 'The odds were poor; nevertheless, she pressed on.' },
  { word: 'nonetheless', type: 'Contrast', usage: 'It was raining; nonetheless, the game continued.' },
  { word: 'on the other hand', type: 'Contrast', usage: 'One study found a benefit; on the other hand, a second found none.' },
  { word: 'in contrast', type: 'Contrast', usage: 'City rents rose sharply; in contrast, suburban rents stayed flat.' },
  { word: 'conversely', type: 'Contrast', usage: 'Sales rose in spring; conversely, they fell in autumn.' },
  { word: 'yet', type: 'Contrast', usage: 'He trained for years, yet he still lost the race.' },
  { word: 'whereas', type: 'Contrast', usage: 'The north favored the policy, whereas the south opposed it.' },
  { word: 'although', type: 'Contrast', usage: 'Although the data was limited, the trend was clear.' },
  { word: 'even so', type: 'Contrast', usage: 'The task was difficult; even so, the team finished on time.' },
  { word: 'by contrast', type: 'Contrast', usage: 'The first draft was vague; by contrast, the revision was precise.' },
  { word: 'on the contrary', type: 'Contrast', usage: 'The results were not disappointing; on the contrary, they exceeded expectations.' },
  { word: 'despite this', type: 'Contrast', usage: 'The budget was cut; despite this, the project stayed on schedule.' },
  { word: 'but', type: 'Contrast', usage: 'The theory was elegant, but the evidence did not support it.' },
  { word: 'regardless', type: 'Contrast', usage: 'The forecast called for rain; regardless, the parade went on.' },
  { word: 'though', type: 'Contrast', usage: 'Though the hike was long, the view made it worthwhile.' },
  { word: 'on one hand', type: 'Contrast', usage: 'On one hand, the policy cuts costs; it also reduces services.' },
  { word: 'even if', type: 'Contrast', usage: 'Even if the plan fails, the team will have learned something.' },
  { word: 'still', type: 'Contrast', usage: 'The evidence was weak; still, the jury convicted him.' },
  { word: 'while', type: 'Contrast', usage: 'While the plan has merit, it is not fully funded.' },
  { word: 'in spite of', type: 'Contrast', usage: 'In spite of the delays, the bridge opened on time.' },
  { word: 'granted', type: 'Contrast', usage: 'Granted, the plan is costly, but it solves the problem.' },
  { word: 'even though', type: 'Contrast', usage: 'Even though the evidence was thin, the theory gained popularity.' },
  { word: 'markedly', type: 'Contrast', usage: 'The two results were markedly different.' },

  // Cause & Effect
  { word: 'therefore', type: 'Cause & Effect', usage: 'The bridge was unsafe; therefore, it was closed.' },
  { word: 'thus', type: 'Cause & Effect', usage: 'Demand fell, thus prices dropped.' },
  { word: 'consequently', type: 'Cause & Effect', usage: 'The factory closed; consequently, hundreds lost their jobs.' },
  { word: 'as a result', type: 'Cause & Effect', usage: 'The road flooded; as a result, traffic was rerouted.' },
  { word: 'hence', type: 'Cause & Effect', usage: 'The evidence was weak; hence, the case was dismissed.' },
  { word: 'accordingly', type: 'Cause & Effect', usage: 'Costs rose; accordingly, the company raised prices.' },
  { word: 'for these reasons', type: 'Cause & Effect', usage: 'For these reasons, the committee rejected the proposal.' },
  { word: 'because', type: 'Cause & Effect', usage: 'The flight was delayed because of a mechanical issue.' },
  { word: 'to that end', type: 'Cause & Effect', usage: 'The school wants smaller classes; to that end, it hired ten new teachers.' },
  { word: 'to this end', type: 'Cause & Effect', usage: 'The city wants cleaner air; to this end, it expanded bus routes.' },
  { word: 'to these ends', type: 'Cause & Effect', usage: 'The firm wants growth and stability; to these ends, it diversified its holdings.' },
  { word: 'since', type: 'Cause & Effect', usage: 'Since the review was positive, sales increased quickly.' },
  { word: 'not surprisingly', type: 'Cause & Effect', usage: 'The team had practiced for months; not surprisingly, they won.' },
  { word: 'as such', type: 'Cause & Effect', usage: 'The report was incomplete; as such, it was returned for revision.' },
  { word: 'after all', type: 'Cause & Effect', usage: 'The delay made sense after all — the storm had closed the roads.' },
  { word: 'so', type: 'Cause & Effect', usage: 'The store was closed, so we shopped online instead.' },

  // Addition
  { word: 'furthermore', type: 'Addition', usage: 'The plan was costly; furthermore, it was untested.' },
  { word: 'moreover', type: 'Addition', usage: 'The house was old; moreover, it needed a new roof.' },
  { word: 'in addition', type: 'Addition', usage: 'The team hired two engineers; in addition, they added a designer.' },
  { word: 'additionally', type: 'Addition', usage: 'The library extended its hours; additionally, it added new computers.' },
  { word: 'also', type: 'Addition', usage: 'The recipe calls for flour and sugar; it also needs baking soda.' },
  { word: 'besides', type: 'Addition', usage: 'Besides being expensive, the flight was delayed.' },
  { word: "what's more", type: 'Addition', usage: "The offer was generous; what's more, it included free shipping." },
  { word: 'as well as', type: 'Addition', usage: 'The museum offers guided tours as well as audio guides.' },
  { word: 'besides that', type: 'Addition', usage: 'The car is fast; besides that, it gets excellent mileage.' },
  { word: 'further', type: 'Addition', usage: 'The study found a link between sleep and memory; further, it showed the effect was stronger in older adults.' },
  { word: 'incidentally', type: 'Addition', usage: 'Incidentally, the same author also wrote the sequel.' },
  { word: 'and', type: 'Addition', usage: 'The design was simple and elegant.' },

  // Examples
  { word: 'for example', type: 'Examples', usage: 'Many fruits are rich in vitamin C — oranges, for example.' },
  { word: 'for instance', type: 'Examples', usage: 'Several cities banned the practice; Boston, for instance, did so in 2019.' },
  { word: 'particularly', type: 'Examples', usage: 'The exam was difficult, particularly the essay section.' },
  { word: 'specifically', type: 'Examples', usage: 'The report criticized one policy specifically: the new tax.' },
  { word: 'in particular', type: 'Examples', usage: 'The essay focuses on one theme in particular: isolation.' },
  { word: 'especially', type: 'Examples', usage: 'The city struggled with traffic, especially during rush hour.' },
  { word: 'including', type: 'Examples', usage: 'Several subjects were covered, including history and science.' },
  { word: 'as an illustration', type: 'Examples', usage: 'As an illustration, consider the 2008 financial crisis.' },
  { word: 'as an example', type: 'Examples', usage: 'As an example, the author cites a single struggling farm.' },

  // Similarity
  { word: 'likewise', type: 'Similarity', usage: 'The town cut spending; likewise, the county reduced its budget.' },
  { word: 'similarly', type: 'Similarity', usage: 'The first experiment showed a decline; similarly, the second did too.' },
  { word: 'by the same token', type: 'Similarity', usage: 'By the same token, a weak argument can still reach a true conclusion.' },
  { word: 'comparatively', type: 'Similarity', usage: 'Comparatively, the new model performs about as well as the old one.' },
  { word: 'correspondingly', type: 'Similarity', usage: 'Enrollment rose; correspondingly, so did tuition revenue.' },

  // Clarification
  { word: 'in other words', type: 'Clarification', usage: 'The results were inconclusive — in other words, no clear pattern emerged.' },
  { word: 'that is', type: 'Clarification', usage: 'The policy is revenue-neutral, that is, it neither raises nor lowers total tax collected.' },
  { word: 'in fact', type: 'Clarification', usage: 'The plan was not just risky; in fact, it was likely to fail.' },
  { word: 'at any rate', type: 'Clarification', usage: 'At any rate, the decision has already been made.' },
  { word: 'in effect', type: 'Clarification', usage: 'The rule change is, in effect, a ban on the practice.' },
  { word: 'of course', type: 'Clarification', usage: 'Of course, no plan is completely risk-free.' },
  { word: 'as a rule', type: 'Clarification', usage: 'As a rule, the museum closes early on holidays.' },
  { word: 'in conclusion', type: 'Clarification', usage: 'In conclusion, the evidence supports the original hypothesis.' },
  { word: 'in broad terms', type: 'Clarification', usage: 'In broad terms, the proposal aims to cut costs without cutting jobs.' },
  { word: 'in any case', type: 'Clarification', usage: 'In any case, the meeting has been rescheduled.' },
  { word: 'indeed', type: 'Clarification', usage: 'The results were strong; indeed, they exceeded every projection.' },
  { word: 'in short', type: 'Clarification', usage: 'In short, the experiment confirmed the original theory.' },
  { word: 'in the article', type: 'Clarification', usage: 'In the article, the author argues that the policy backfired.' },
  { word: 'namely', type: 'Clarification', usage: 'One factor stood out, namely the lack of funding.' },
  { word: 'in essence', type: 'Clarification', usage: 'In essence, the debate comes down to cost versus safety.' },
  { word: 'all things considered', type: 'Clarification', usage: 'All things considered, the trip was a success.' },
  { word: 'to summarize', type: 'Clarification', usage: 'To summarize, the plan cuts costs but delays the timeline.' },
  { word: 'in the final analysis', type: 'Clarification', usage: 'In the final analysis, the results changed very little.' },
  { word: 'effectively', type: 'Clarification', usage: 'The new rule effectively ends the old exemption.' },
  { word: 'essentially', type: 'Clarification', usage: 'Essentially, the two proposals differ only in funding source.' },

  // Alternatives
  { word: 'instead', type: 'Alternatives', usage: 'Rather than raise taxes, the city instead cut services.' },
  { word: 'otherwise', type: 'Alternatives', usage: 'Submit the form by Friday; otherwise, the request expires.' },
  { word: 'alternatively', type: 'Alternatives', usage: 'Alternatively, the committee could postpone the vote.' },
  { word: 'alternately', type: 'Alternatives', usage: 'The two teams alternately led the score throughout the game.' },
  { word: 'aside from', type: 'Alternatives', usage: 'Aside from one delayed flight, the trip went smoothly.' },
  { word: 'excluding', type: 'Alternatives', usage: 'Excluding the cost of shipping, the total came to fifty dollars.' },
  { word: 'barring', type: 'Alternatives', usage: 'Barring bad weather, the launch will proceed as scheduled.' },
  { word: 'rather', type: 'Alternatives', usage: 'The problem is not funding but rather planning.' },

  // Sequence
  { word: 'finally', type: 'Sequence', usage: 'The team fixed the bug, tested the patch, and finally shipped the update.' },
  { word: 'meanwhile', type: 'Sequence', usage: 'The lawyers prepared their case; meanwhile, the jury was selected.' },
  { word: 'subsequently', type: 'Sequence', usage: 'The company issued a recall; subsequently, sales fell sharply.' },
  { word: 'then', type: 'Sequence', usage: 'She outlined the plan, then answered questions.' },
  { word: 'when', type: 'Sequence', usage: 'When the bell rang, the students filed out.' },
  { word: 'in the first place', type: 'Sequence', usage: 'In the first place, the budget was never approved.' },
  { word: 'around the same time', type: 'Sequence', usage: 'Around the same time, a rival company released a similar product.' },
  { word: 'at this time', type: 'Sequence', usage: 'At this time, no further updates are expected.' },
  { word: 'all the while', type: 'Sequence', usage: 'The city kept growing; all the while, traffic worsened.' },
  { word: 'previously', type: 'Sequence', usage: 'Previously, the position required a college degree.' },
  { word: 'traditionally', type: 'Sequence', usage: 'Traditionally, the festival is held in early spring.' },
  { word: 'initially', type: 'Sequence', usage: 'Initially, the treatment showed no effect.' },
  { word: 'ultimately', type: 'Sequence', usage: 'Ultimately, the board rejected the merger.' },
  { word: 'afterward', type: 'Sequence', usage: 'The storm passed; afterward, crews began repairing the damage.' },
  { word: 'after some time', type: 'Sequence', usage: 'After some time, the swelling finally went down.' },
  { word: 'eventually', type: 'Sequence', usage: 'Eventually, the two companies agreed to merge.' },
  { word: 'next', type: 'Sequence', usage: 'Next, add the eggs and stir until smooth.' },
  { word: 'until', type: 'Sequence', usage: 'The store stayed open until the last customer left.' },
  { word: 'today', type: 'Sequence', usage: 'Today, the practice is far less common than it once was.' },
  { word: 'at first', type: 'Sequence', usage: 'At first, the plan seemed too expensive to consider.' },
  { word: 'first of all', type: 'Sequence', usage: 'First of all, check that the device is charged.' },
  { word: 'at the same time', type: 'Sequence', usage: 'At the same time, a similar bill was introduced in the Senate.' },
  { word: 'the next step', type: 'Sequence', usage: 'The next step is to submit the application for review.' },
  { word: 'earlier', type: 'Sequence', usage: 'Earlier, the company had denied any wrongdoing.' },
];
