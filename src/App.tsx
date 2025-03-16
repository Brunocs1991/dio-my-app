import { Card } from "./components/Card"
import { Layout } from "./components/Layout"

export default () => {

  return (
    <Layout>
       <h1>Hello, world!</h1>
      <Card
        id={1}
        paragraph="This is a paragraph"
        details="These are the details"
      />
      <Card
        id={2}
        paragraph="This is another paragraph"
        details="These are more details"
      />
      <Card
        id={3}
        paragraph="This is a third paragraph"
        details="These are even more details"
      />
    </Layout>
  )
}


