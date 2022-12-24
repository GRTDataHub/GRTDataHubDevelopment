// import { useGetLatestYoutubeVideo } from "../hooks/useGraphAPI";
// import '../App.css';

// export function YoutubeVideo(){
//     const { latestId } = useGetLatestYoutubeVideo();
//     if(latestId === undefined){
//         return(
//             <div>Loading ...</div>
//         )
//     }
//     const latestVideoLink = `https://www.youtube.com/embed/${latestId ?? ''}`;
//     return(
//         <div className="video-center"><iframe className="video" width="380" height="215" src={latestVideoLink} title="The Graph News" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
        
//     );
// }