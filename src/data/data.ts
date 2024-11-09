import type { Coach } from './types'

const coaches: Coach[] = [
  {
    id: 'manu',
    name: 'Manuel Lorenz',
    projects: [
      { id: 'manu_p1', title: 'NodeJS' },
      { id: 'manu_p2', title: 'Data Science with Python' },
      { id: 'manu_p3', title: 'Django' }
    ]
  },
  {
    id: 'julie',
    name: 'Julie Jones',
    projects: [
      { id: 'julie_p1', title: 'Master Jira and Scrum' },
      { id: 'julie_p2', title: 'Project Management' }
    ]
  },
  {
    id: 'michael',
    name: 'Michael Miller',
    projects: []
  },
  {
    id: 'anna',
    name: 'Anna Smith',
    projects: [
      { id: 'anna_p1', title: 'React Basics' },
      { id: 'anna_p2', title: 'Advanced React' },
      { id: 'anna_p3', title: 'React Native' }
    ]
  },
  {
    id: 'john',
    name: 'John Doe',
    projects: [
      { id: 'john_p1', title: 'VueJS Essentials' },
      { id: 'john_p2', title: 'VueJS Advanced' }
    ]
  },
  {
    id: 'sarah',
    name: 'Sarah Connor',
    projects: [
      { id: 'sarah_p1', title: 'Machine Learning' },
      { id: 'sarah_p2', title: 'Deep Learning' },
      { id: 'sarah_p3', title: 'AI Ethics' }
    ]
  },
  {
    id: 'david',
    name: 'David Brown',
    projects: [
      { id: 'david_p1', title: 'Full Stack Development' },
      { id: 'david_p2', title: 'DevOps' }
    ]
  }
]

export default coaches
