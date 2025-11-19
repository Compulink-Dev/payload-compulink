import * as React from 'react'

import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'

import LinkButton from './link-button'

export function CardWithForm({ name, link }: { name: string; link: string }) {
  return (
    <Card className="w-full md:w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Enquire a project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Link href={link}>{name}</Link>
            </div>
            <div className="flex flex-col space-y-1.5">
              {/* <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Next.js</SelectItem>
                                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                    <SelectItem value="astro">Astro</SelectItem>
                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                </SelectContent>
                            </Select> */}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <LinkButton name={name} link={link} />
        <Button variant="outline">
          <Link href={'/contact'}>Contact us</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
