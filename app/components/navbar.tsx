type Props = {};
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Navbar(props: Props) {
  return (
    <nav className='sticky top-0 z-20 min-h-[80px]  h-16  flex justify-center'>
      <div className='max-w-screen-xl w-full flex items-center'>
        <section className='flex gap-4'>
          <AiFillLinkedin fontSize={36} />
          <AiFillGithub fontSize={36} />
        </section>
      </div>
    </nav>
  );
}
