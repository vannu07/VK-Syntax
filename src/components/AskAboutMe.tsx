import { useState } from 'react'
import { useResumeData } from '@/hooks/useResumeData'
import { useQuery } from '@tanstack/react-query'
import { fetchRepos } from '@/services/github'
import { Button } from '@/components/ui/button'

export default function AskAboutMe() {
  const { data } = useResumeData()
  const username = (import.meta.env.VITE_GITHUB_USERNAME as string) || 'vannu07'
  const { data: repos } = useQuery({
    queryKey: ['aboutRepos', username],
    queryFn: () => fetchRepos(username, 6),
    staleTime: 1000 * 60 * 10,
  })
  const [q, setQ] = useState('')
  const [a, setA] = useState('')
  const answer = () => {
    const text = q.toLowerCase()
    if (text.includes('skill') || text.includes('tech')) {
      const t = data?.skills?.technologies?.slice(0, 8)?.join(', ')
      setA(t || 'Skills data not available')
      return
    }
    if (text.includes('project') || text.includes('repo')) {
      const r = repos?.slice(0, 3)?.map(x => x.name).join(', ')
      setA(r || 'Repository data not available')
      return
    }
    setA('Ask me about skills, technologies, or projects')
  }
  return (
    <div className="glass glow-border rounded-2xl p-6 space-y-4">
      <div className="flex gap-2">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          className="flex-1 bg-secondary rounded-md px-3 py-2 outline-none"
          placeholder="Ask about my skills, technologies, or projects"
        />
        <Button onClick={answer}>Ask</Button>
      </div>
      {a && <p className="text-muted-foreground">{a}</p>}
    </div>
  )
}
