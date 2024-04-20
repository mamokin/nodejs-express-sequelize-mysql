import React, { ComponentType, Suspense } from "react";

// Add a fixed delay so you can see the loading state
function delayForDemo(
  promise: Promise<{ default: ComponentType<any> }>
): Promise<{ default: ComponentType<any> }> {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const HomeModule = React.lazy(() => import("./components/HomeModule"));

const Home = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomeModule />
    </Suspense>
  );
};
export default Home;
