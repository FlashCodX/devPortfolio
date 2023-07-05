import Link from "next/link";

type Props = {};

export default function Menu(props: Props) {
  return (
    <section className='mt-4 flex gap-4 flex-wrap justify-center'>
      <Link className='heroButton' href='#about'>
        About
      </Link>
      <Link className='heroButton' href='#skills'>
        Skills
      </Link>
      <Link className='heroButton' href='#projects'>
        Projects
      </Link>
      <Link className='heroButton' href='#experience'>
        Experience
      </Link>
      <Link className='heroButton' href='#documents'>
        Documents
      </Link>
    </section>
  );
}
