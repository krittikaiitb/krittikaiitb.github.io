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
        <div className="mt-4" style={{maxWidth: "50rem", margin: "3rem auto 6rem"}} >
        <h1 style={{paddingBottom: "4px", margin: "auto"}}><b>{ event.title }</b></h1>
        <div dangerouslySetInnerHTML={{__html: event.content}}></div>
    </div>
    )
}

export const getStaticProps: GetStaticProps = function({ params }) {
  if (params && params.slug){
    return {
      props: {
        event : getEventBySlug(Array.isArray(params.slug) ? params.slug[0] : params.slug),
      },
    }
    
  }
  else{
    return {
      props: { error: true },
    };
  
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
    
  