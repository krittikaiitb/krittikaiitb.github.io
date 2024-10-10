import Head from 'next/head'
import Image from 'next/image'
import Apod from '../src/apod';
import HomeCarousel from '../src/carousel';
export default function Home() {
  return (
    <div>
      <main>
      <HomeCarousel></HomeCarousel>
      <div className="p-3" id="about">
  <div className="container card my-md-4 my-3 p-3 pl-4 shadow-lg aboutCard">
    <h1
      className="display-4 text-center my-6"
      style={{ paddingBottom: 10, paddingTop: 20 }}
    >
      Krittika: The Astronomy Club, IIT Bombay
    </h1>
    <p>
      Who hasn&apos;t been starstruck by the ethereal beauty of the midnight sky,
      gazed at the moon&apos;s comforting light and perhaps been thrilled at the
      sight of a meteor flashing in the darkness of night? And have you ever
      wished to be able to connect more deeply with all this celestial
      magnificence? If yes, this is where your wish will come true.
    </p>
    <p>
      Hey there! We are Krittika, the Astronomy club of IITB, and our prime
      motive is to make the Universe more accessible to everyone. We conduct a
      wide variety of activities - from stargazing sessions where you can gape
      at the stunning detail in the moon and planets and stellar nebula our
      telescopes show you (and even try photographing them on the way!), and
      quizzes and group discussions where you rack your brains on mind-bending
      topics - to offering projects to get a taste of astronomical research,
      organizing trips to GMRT and screening evergreen movies on space tech.
    </p>
    <p>
      Stay tuned on our social media handles to get regular updates on our
      activities and participate in fun trivia quizzes too
    </p>
  </div>
</div>
<Apod/>
      </main>
    </div>
  )
}
