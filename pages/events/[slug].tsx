import { GetStaticProps } from "next"
import { getEventBySlug, getAllEventsData } from "../../src/events"


type Event = {
    slug: string,
    title: string,
    date: string,
    excerpt: string,
    content: string
}

export default function events({event}: {event:Event}){
    return (
        <div className="mt-4">
        <h1>{ event.title }</h1>
        <div dangerouslySetInnerHTML={{__html: event.content}}></div>
    </div>
    )
}

export const getStaticProps: GetStaticProps = function({ params }) {
    return {
      props: {
        event : getEventBySlug(params.slug),
      },
    }
  }

  export function getStaticPaths() {
      return {
        fallback: false,
        paths: getAllEventsData().map(event => ({
          params: {
            slug: event.slug,
          },
        })),
      }
    }
    
  