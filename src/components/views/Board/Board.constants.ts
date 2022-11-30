export type TTicket = {
  id: number;
  name: string;
  estimate: string;
  column: COLUMN_NAMES;
};

export enum COLUMN_NAMES {
  NEW_TASK = 'New task',
  SCHEDULED = 'Scheduled',
  IN_PROGRESS = 'In progress',
  COMPLETED = 'Completed',
}

export const INITIAL_TICKETS: TTicket[] = [
  {
    id: 1,
    name: 'Check email',
    estimate: '0:20h',
    column: COLUMN_NAMES.NEW_TASK,
  },
  {
    id: 2,
    name: 'Compare PPC agencies and make a report for Steven',
    estimate: '0:20h',
    column: COLUMN_NAMES.NEW_TASK,
  },
  {
    id: 3,
    name: 'Meeting with Amanda (PR department)',
    estimate: '0:20h',
    column: COLUMN_NAMES.NEW_TASK,
  },
  {
    id: 4,
    name: "Get Patrick's approval for homepage new design",
    estimate: '0:20h',
    column: COLUMN_NAMES.NEW_TASK,
  },
  {
    id: 6,
    name: 'Write a blogpost "7 best strategies for SEO in 2020"',
    estimate: '0:20h',
    column: COLUMN_NAMES.SCHEDULED,
  },
  {
    id: 7,
    name: 'New Ad copies for Manamaja',
    estimate: '0:20h',
    column: COLUMN_NAMES.SCHEDULED,
  },
  {
    id: 9,
    name: "Record a video comment about last week's analytics report",
    estimate: '0:20h',
    column: COLUMN_NAMES.IN_PROGRESS,
  },
  {
    id: 10,
    name: 'Process all resumes for Content Marketer position',
    estimate: '0:20h',
    column: COLUMN_NAMES.IN_PROGRESS,
  },
  {
    id: 12,
    name: 'Weekly planning session',
    estimate: '0:20h',
    column: COLUMN_NAMES.COMPLETED,
  },
  {
    id: 13,
    name: 'Create 5+ target audiences in Facebook for Samsung ...',
    estimate: '0:20h',
    column: COLUMN_NAMES.COMPLETED,
  },
  {
    id: 14,
    name: 'Check FB Banner Design and give feedback',
    estimate: '0:20h',
    column: COLUMN_NAMES.COMPLETED,
  },
];
