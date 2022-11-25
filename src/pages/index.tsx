import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { MyForm } from '@/ui/component/MyForm';
import spacebg from '@/public/assets/images/space.jpg';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Formik Fields"
          description="reusable component for input fields formik"
        />
      }
    >
      
      <section style={{backgroundImage: `url(${spacebg.src})`, backgroundSize: "cover"}} className="relative justify-end w-screen h-screen mx-auto ">
        
        <MyForm />
      </section>
    </Main>
  );
};

export default Index;

