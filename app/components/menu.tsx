import Link from "next/link";

type Props = {};

export default function Menu(props: Props) {
  return (
    <section className='flex gap-5 mx-auto  left-0 right-0 m-auto'>
      <Link className='heroButton' href='#about'>
        About
      </Link>
      <Link className='heroButton' href='#skills'>
        Skills
      </Link>
      <Link className='heroButton' href='/'>
        Projects
      </Link>
      <Link className='heroButton' href='/'>
        Experience
      </Link>
      <Link className='heroButton' href='/'>
        Documents
      </Link>
    </section>
  );
}
