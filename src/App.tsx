// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";

function App() {

  return (
    <>
      <Layout>
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Component with Props!"/>*/}
        {/*<ArrowFunctionalComponentWithPropsType title="Is an Arrow Functional with Props"*/}
        {/*                                         description="this is the description"/>*/}


        {/*<h1 className="text-center text-2xl font-bold">This is a heading title</h1>*/}
        {/*<FunctionalComponent/>*/}

        {/*<ClassComponentWithState />*/}
        {/*<ClassComponentWithState />*/}
        {/*<FunctionalComponentWithState/>*/}
        <Counter/>
      </Layout>
    </>
  )
}

export default App
