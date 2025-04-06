'use client'

import updates from '@/config/updates.json'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function UpdateHistory() {
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Historial de actualizaciones</h2>
      <Separator />
      <div className="space-y-4">
        {sortedUpdates.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <p className="text-sm text-muted-foreground">{item.date}</p>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {item.items?.length ? (
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  {item.items.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">{item.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
