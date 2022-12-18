import Link from 'next/link';
import {getAllEventsData} from '../src/events'

type EventData = {
    slug: string,
    title: string,
    date: string,
    excerpt: string,
}

export default function Events({allEventsData}: {allEventsData: EventData[]}){
    return(
        <div className="mt-4">
            <h1>Events</h1>
            <ul>
            {allEventsData.map(({slug, date, title, excerpt}: EventData) => (
                <li key={slug}>
                    <Link href = {`/events/${slug}`}>{title}</Link>
                    <br />
                    {excerpt}
                </li>
            ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const allEventsData = getAllEventsData();
    console.log(`All posts: ${allEventsData}`)
    return {
      props: {
        allEventsData,
      },
    };
  }
  