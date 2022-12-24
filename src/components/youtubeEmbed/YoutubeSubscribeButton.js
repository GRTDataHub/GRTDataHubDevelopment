// import "../App.css";
// import { useEffect } from "react";

// const useScript = (url) => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = url;
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [url]);
// };

// export default function YoutubeSubscibeButton() {
//   return (
//     <>
//       <div>{useScript("https://apis.google.com/js/platform.js")}</div>
//       <div
//         class="g-ytsubscribe"
//         data-channelid="UCPAUeNaRtBV-jdSKY8wmcXg"
//         data-layout="default" data-count="default" data-theme="dark" target="_blank"
//       ><p className="subscribeNote">Please show the channel some support by Subscribing here!</p></div>
//     </>
//   );
// }
