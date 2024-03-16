import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, Suspense, lazy, useEffect, useState } from "react";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = lazy(() =>
  // @ts-ignore
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

export function App({ children }: PropsWithChildren) {
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  );
}
