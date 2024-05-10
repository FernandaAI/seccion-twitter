import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.js'

const users = [
  {
    userName: 'Ing.Fernanda',
    name: 'Fernanda AI',
    isFollowing: true
  },
  {
    userName: 'Ing.Cristian',
    name: 'Cristian A.',
    isFollowing: false
  },
  {
    userName: 'Karen.Runners',
    name: 'Karen AI',
    isFollowing: true
  },
  {
    userName: 'Kira.Mascota',
    name: 'Kira',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
export default App