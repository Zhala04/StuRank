// import { BrowserHistory } from "history";
// import React, { useContext } from "react";
// import { UNSAFE_NavigationContext } from "react-router-dom";

// export default function usePathname(): string {
//   let [state, setState] = React.useState<string>(window.location.pathname);

//   const navigation = useContext(UNSAFE_NavigationContext)
//     .navigator as BrowserHistory;
//   React.useLayoutEffect(() => {
//     if (navigation) {
//       navigation.listen((locationListener) =>
//         setState(locationListener.location.pathname)
//       );
//     }
//   }, [navigation]);

//   return state;
// }