import FreelanceCS from '../../components/pageComponents/freelanceCS'

const Lang = (props) => {
  return (
    <div>
      <FreelanceCS {...props}/>
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
