// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

// import Layout from "./components/Layout.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
// import HomePage from "./pages/HomePage.tsx";
// import NameChangerPage from "./pages/NameChangerPage.tsx";
// import Layout from "./components/Layout.tsx";
// import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
// import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ProductsList from "@/components/ProductsList.tsx";
// import {ProductType} from "@/api/products";
import Product from "@/pages/Product.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
// import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
// import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import UnControlledInput from "./components/UnControlledInput.tsx";
// import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation.tsx";
// import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
// import MultiFieldFormWithReactHook from "./components/MultiFieldFormWithReactHook.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";

function App() {

  return (
    <>
      {/*<Layout>*/}
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
        {/*<Counter/>*/}
        {/*<NameChanger/>*/}
        {/*<CounterWithMoreStates/>*/}
        {/*<CounterAdvanced/>*/}
        {/*<CounterWithCustomHook/>*/}
        {/*<CounterAdvancedWithCustomHook/>*/}
        {/*<CounterWithReducer/>*/}
        {/*<Todo/>*/}
        {/*<OnlineStatus/>*/}

      {/*</Layout>*/}

      <BrowserRouter>
        {/*<Layout>*/}
          <Routes>
            {/*/!*ΚΑΙ ΜΕ "/" ΚΑΙ ΜΕ INDEX ΕΙΝΑΙ ΤΟ ΙΔΙΟ*!/*/}
            {/*/!*<Route path="/" element={<HomePage />}></Route>*!/*/}
            {/*/!*ΕΤΣΙ ΠΕΡΙΚΛΕΙΟΥΜΕ ΣΕ ΕΝΑ COMPONENT ANTI ΓΙΑ ΤΗΝ ΧΡΗΣΗ ΤΟΥ CHILDREN*!/*/}
            {/*<Route element={<RouterLayout />}>*/}
            {/*  /!*<Route index element={<HomePage />}></Route>*!/*/}
            {/*  /!*<Route index element={<FocusInput />}></Route>*!/*/}
            {/*  /!*<Route index element={<MultiFieldForm />}></Route>*!/*/}
            {/*  /!*<Route index element={<MultiFieldFormWithValidation />}></Route>*!/*/}
            {/*  /!*<Route index element={<MultiFieldFormWithZodValidation />}></Route>*!/*/}
            {/*  <Route index element={<MultiFieldFormWithReactHook />}></Route>*/}

            {/*  /!*<Route index element={<UnControlledInput />}></Route>*!/*/}
            {/*  /!*<Route index element={<MultiFieldForm />}></Route>*!/*/}
            {/*</Route>*/}
            {/*<Route path="name-changer" element={<NameChangerPage />}></Route>*/}

            {/*/!*ΕΤΣΙ ΒΑΖΟΥΜΕ ΣΕ ΕΝΑ PATH ΑΡΚΕΤΕΣ ΣΕΛΙΔΕΣ*!/*/}
            {/*/!*Optional with ?*!/*/}
            {/*/!*<Route path="examples?">*!/*/}
            {/*<Route path="examples" element={<RouterExamplesLayout />}>*/}
            {/*  /!*<Route index element={<ExamplesPage />}></Route>*!/*/}
            {/*  <Route path="name-changer" element={<NameChangerPage/>}></Route>*/}
            {/*  <Route path="online-status" element={<OnlineStatusPage/>}></Route>*/}
            {/*  <Route path="auto-redirect" element={<AutoRedirectPage />}></Route>*/}
            {/*</Route>*/}
            {/*<Route path="users/:userId" element={<UserPage />}></Route>*/}
            {/*<Route path="users" element={<UserPage />}></Route>*/}
            {/*/!*<Route path="files/*" element={<FilePage />}></Route>*!/*/}
            {/*/!*ΠΑΝΤΑ ΜΠΑΙΝΕΙ ΣΤΟ ΤΕΛΟΣ ΤΗΣ ΣΕΛΙΔΑΣ*!/*/}
            {/*<Route path="*" element={<NotFoundPage />}></Route>*/}
            <Route path="products" element={<RouterLayout />} />
              <Route index element={<ProductsList/>} />
              <Route path="new" element={<Product mode="create" />}/>
              <Route path=":productId" element={<Product mode="edit"/>} />

          </Routes>
        {/*</Layout>*/}
      </BrowserRouter>
    </>
  )
}

export default App
