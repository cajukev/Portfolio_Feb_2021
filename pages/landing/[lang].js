import Index from '../../components/pageComponents/index'

const Lang = (props) => {
  return (
    <div>
      <Index {...props}/>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = [
    {
      params: {
        lang: 'fr'
      }
    },
    {
      params: {
        lang: 'en'
      }
    }
  ]
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  return {
    props: {
      
    }
  }
}
export default Lang;
