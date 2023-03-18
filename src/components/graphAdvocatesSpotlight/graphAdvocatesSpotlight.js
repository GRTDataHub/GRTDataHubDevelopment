import React from 'react';
import '../../App.css';
import PrivacyPolicyNavbar from "../privacyPolicy/privacyPolicyNavbar";

const GraphAdvocatesSpotlight = () => ({ 
  render(){
    const handleIssue1ENG = () => {
      // using Java Script method to get PDF file
      fetch('Issue1-ENG.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Issue #1 - Graph Advocates Spotlight.pdf';
              alink.click();
          })
      })
  }

  const handleIssue2ENG = () => {
    // using Java Script method to get PDF file
    fetch('Issue2-ENG.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Issue #2 - Graph Advocates Spotlight.pdf';
            alink.click();
        })
    })
}

const handleIssue3ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue3-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #3 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue4ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue4-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #4 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue5ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue5-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #5 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue6ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue6-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #6 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue7ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue7-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #7 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue8ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue8-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #8 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue9ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue9-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #9 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue10ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue10-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #10 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue11ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue11-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #11 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue12ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue12-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #12 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue13ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue13-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #13 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue13ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue13-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #13 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue14ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue14-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #14 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue14ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue14-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #14 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue15ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue15-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #15 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue15ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue15-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #15 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue15URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue15-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #15 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue16ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue16-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #16 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue16ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue16-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #16 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue16FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue16-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #16 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue16URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue16-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #16 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue17ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue17-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #17 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue17ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue17-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #17 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue17FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue17-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #17 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue17URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue17-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #17 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue18ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue18-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #18 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue18FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue18-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #18 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue18ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue18-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #18 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue18URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue18-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #18 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue19ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue19-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #19 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue19ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue19-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #19 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue19URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue19-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #19 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue19FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue19-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #19 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue20ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue20-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #20 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue20ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue20-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #20 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue20URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue20-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #20 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue20FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue20-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #20 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue21ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue21-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #21 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue21ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue21-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #21 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue21URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue21-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #21 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue21FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue21-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #21 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue22ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue22-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #22 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue22ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue22-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #22 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue22URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue22-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #22 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue22FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue22-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #22 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue23ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue23-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #23 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue23ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue23-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #23 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue23URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue23-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #23 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue23FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue23-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #23 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue24ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue24-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #24 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

// const handleIssue24ESP = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue24-ESP.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #24 - ESP Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

const handleIssue24URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue24-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #24 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue24FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue24-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #24 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue25ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue25-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #25 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

// const handleIssue25ESP = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue25-ESP.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #25 - ESP Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

const handleIssue25URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue25-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #25 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue25FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue25-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #25 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue25CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue25-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #25 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue26ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue26-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #26 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

// const handleIssue26ESP = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue26-ESP.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #26 - ESP Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

const handleIssue26URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue26-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #26 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue26FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue26-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #26 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue26CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue26-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #26 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue27ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue27-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #27 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue27ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue27-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #27 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue27URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue27-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #27 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue27FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue27-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #27 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue27CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue27-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #27 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue28ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue28-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #28 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue28ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue28-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #28 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue28URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue28-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #28 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue28CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue28-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #28 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue28FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue28-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #28 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue29ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue29-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #29 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue29ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue29-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #29 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue29URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue29-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #29 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue29CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue29-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #29 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue29FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue29-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #29 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue29RUS = () => {
  // using Java Script method to get PDF file
  fetch('Issue29-RUS.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #29 - RUS Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue30ENG = () => {
  // using Java Script method to get PDF file
  fetch('Issue30-ENG.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #30 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue30ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue30-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #30 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue30URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue30-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #30 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue30CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue30-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #30 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue30FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue30-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #30 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue30RUS = () => {
  // using Java Script method to get PDF file
  fetch('Issue30-RUS.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #30 - RUS Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

// const handleIssue31ENG = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue31-ENG.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #31 - Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

const handleIssue31GER = () => {
  // using Java Script method to get PDF file
  fetch('Issue31-GER.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #31 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue31ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue31-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #31 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue31URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue31-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #31 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue31CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue31-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #31 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue31FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue31-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #31 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue31RUS = () => {
  // using Java Script method to get PDF file
  fetch('Issue31-RUS.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #31 - RUS Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

// const handleIssue32ENG = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue32-ENG.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #32 - Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

const handleIssue32GER = () => {
  // using Java Script method to get PDF file
  fetch('Issue32-GER.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #32 - Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue32ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue32-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #32 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue32URD = () => {
  // using Java Script method to get PDF file
  fetch('Issue32-URD.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #32 - URD Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue32CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue32-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #32 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue32FRA = () => {
  // using Java Script method to get PDF file
  fetch('Issue32-FRA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #32 - FRA Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

const handleIssue32RUS = () => {
  // using Java Script method to get PDF file
  fetch('Issue32-RUS.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #32 - RUS Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

// const handleIssue33ENG = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue33-ENG.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #33 - Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

// const handleIssue33GER = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue33-GER.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #33 - Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

const handleIssue33ESP = () => {
  // using Java Script method to get PDF file
  fetch('Issue33-ESP.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #33 - ESP Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

// const handleIssue33URD = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue33-URD.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #33 - URD Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

const handleIssue33CHI = () => {
  // using Java Script method to get PDF file
  fetch('Issue33-CHI.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #33 - CHI Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

// const handleIssue33FRA = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue33-FRA.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #33 - FRA Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

// const handleIssue34ENG = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue34-ENG.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #34 - Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

// const handleIssue34GER = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue34-GER.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #34 - Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

// const handleIssue34ESP = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue34-ESP.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #34 - ESP Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

// const handleIssue34URD = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue34-URD.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #34 - URD Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

// const handleIssue34CHI = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue34-CHI.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #34 - CHI Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

// const handleIssue34FRA = () => {
//   // using Java Script method to get PDF file
//   fetch('Issue34-FRA.pdf').then(response => {
//       response.blob().then(blob => {
//           // Creating new object of PDF file
//           const fileURL = window.URL.createObjectURL(blob);
//           // Setting various property values
//           let alink = document.createElement('a');
//           alink.href = fileURL;
//           alink.download = 'Issue #34 - FRA Graph Advocates Spotlight.pdf';
//           alink.click();
//       })
//   })
// }

const handleIssue33RUS = () => {
  // using Java Script method to get PDF file
  fetch('Issue33-RUS.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Issue #33 - RUS Graph Advocates Spotlight.pdf';
          alink.click();
      })
  })
}

      return (
        <>
        <PrivacyPolicyNavbar />
        <div className="question-bank-container">
            <div className="QB-text-container">
            <h2 className="QB-about-page-subtitle">Welcome to the <strong>Graph Advocates Spotlight</strong> Page!</h2>
            <br></br> 
            <h2 className="QB-about-page-subtitle">What is it?</h2>
            <h3 className="QB-about-page-text">It is to showcase Graph Advocates who choose to participate by highlighting their interests and accomplishments both inside and outside of their role as an Advocate. Showcasing the Advocates publicly provides positive non-financial value by increasing their social network and receiving much deserved recognition for their contributions. I also highlights Advocates skills and interests, connecting them with fellow Advocates who share similar passions.<br></br><br></br>The newsletter also enables anyone to get or remain up to date on all the significant news, events, and data in The Graph Ecoystem each week, just by taking 10-12 minutes to read the <strong>Community Roundup</strong>, <strong>Advocate Events</strong>, and <strong>Data Depot</strong> sections of the newsletter.</h3><br></br><h3 className="QB-about-page-text">Created By <a className="chatbot-link" href='https://twitter.com/kylelarue11?s=21&t=aoe8RCwfwaOZ4FIUavFZrg' target="_blank" rel="noreferrer">Kyle</a>, GraphAdvocate & DAO Member.<br></br><strong>Note:</strong> All links within the PDFs work!</h3>
            


            <hr className="QB-about-hr"></hr>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            // onClick={handleIssue34ENG} 
            href="https://twitter.com/kylelarue11/status/1636836257882951681?s=46&t=1i0wTsEvxdyNDwHmOetdeQ"
            target="_blank" rel="noreferrer">Issue #34 - Ben Abasiono</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue34ESP} target="_blank" rel="noreferrer">Issue #34 en español</a></h2> */}
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue33FRA} target="_blank" rel="noreferrer">Issue #33 en français</a></h2> */}
             {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue33URD} target="_blank" rel="noreferrer">شمارہ نمبر 33 اردو میں</a></h2> */}
             {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue34CHI} target="_blank" rel="noreferrer">第34期中文版</a></h2> */}
             {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue34RUS} target="_blank" rel="noreferrer">Выпуск №34 на русском языке</a></h2> */}
             {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue34GER} target="_blank" rel="noreferrer">Ausgabe Nr. 34 auf Deutsch</a></h2> */}
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            // onClick={handleIssue33ENG} 
            href="https://twitter.com/KyleLaRue11/status/1633865816503640065?s=20"
            target="_blank" rel="noreferrer">Issue #33 - Graphica</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue33ESP} target="_blank" rel="noreferrer">Issue #33 en español</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue33FRA} target="_blank" rel="noreferrer">Issue #33 en français</a></h2> */}
             {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue33URD} target="_blank" rel="noreferrer">شمارہ نمبر 33 اردو میں</a></h2> */}
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue33CHI} target="_blank" rel="noreferrer">第33期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue33RUS} target="_blank" rel="noreferrer">Выпуск №33 на русском языке</a></h2>
             {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue33GER} target="_blank" rel="noreferrer">Ausgabe Nr. 33 auf Deutsch</a></h2> */}
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            // onClick={handleIssue32ENG} 
            href="https://twitter.com/KyleLaRue11/status/1631335834606551040?s=20"
            target="_blank" rel="noreferrer">Issue #32 - Asad Ullah</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue32ESP} target="_blank" rel="noreferrer">Issue #32 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue32FRA} target="_blank" rel="noreferrer">Issue #32 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue32URD} target="_blank" rel="noreferrer">شمارہ نمبر 32 اردو میں</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue32CHI} target="_blank" rel="noreferrer">第32期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue32RUS} target="_blank" rel="noreferrer">Выпуск №32 на русском языке</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue32GER} target="_blank" rel="noreferrer">Ausgabe Nr. 32 auf Deutsch</a></h2>
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" 
            // onClick={handleIssue31ENG} 
            href="https://twitter.com/KyleLaRue11/status/1628797339732156421?s=20"
            target="_blank" rel="noreferrer">Issue #31 - Phuture</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue31ESP} target="_blank" rel="noreferrer">Issue #31 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue31FRA} target="_blank" rel="noreferrer">Issue #31 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue31URD} target="_blank" rel="noreferrer">شمارہ نمبر 31 اردو میں</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue31CHI} target="_blank" rel="noreferrer">第31期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue31RUS} target="_blank" rel="noreferrer">Выпуск №31 на русском языке</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue31GER} target="_blank" rel="noreferrer">Ausgabe Nr. 31 auf Deutsch</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue30ENG} target="_blank" rel="noreferrer">Issue #30 - DappLooker</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue30ESP} target="_blank" rel="noreferrer">Issue #30 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue30FRA} target="_blank" rel="noreferrer">Issue #30 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue30URD} target="_blank" rel="noreferrer">شمارہ نمبر 30 اردو میں</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue30CHI} target="_blank" rel="noreferrer">第30期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue30RUS} target="_blank" rel="noreferrer">Выпуск №30 на русском языке</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue29ENG} target="_blank" rel="noreferrer">Issue #29 - Constantin Promesse Juste</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue29ESP} target="_blank" rel="noreferrer">Issue #29 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue29FRA} target="_blank" rel="noreferrer">Issue #29 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue29URD} target="_blank" rel="noreferrer">شمارہ نمبر 29 اردو میں</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue29CHI} target="_blank" rel="noreferrer">第29期中文版</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue29RUS} target="_blank" rel="noreferrer">Выпуск №29 на русском языке</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue28ENG} target="_blank" rel="noreferrer">Issue #28 - Sablier</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue28ESP} target="_blank" rel="noreferrer">Issue #28 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue28FRA} target="_blank" rel="noreferrer">Issue #28 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue28URD} target="_blank" rel="noreferrer">شمارہ نمبر 28 اردو میں</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue28CHI} target="_blank" rel="noreferrer">第28期中文版</a></h2>
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue27ENG} target="_blank" rel="noreferrer">Issue #27 - Thomas Freestone</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue27ESP} target="_blank" rel="noreferrer">Issue #27 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue27FRA} target="_blank" rel="noreferrer">Issue #27 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue27URD} target="_blank" rel="noreferrer">شمارہ نمبر 27 اردو میں</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue27CHI} target="_blank" rel="noreferrer">第27期中文版</a></h2>
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue26ENG} target="_blank" rel="noreferrer">Issue #26 - Livepeer</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue26ESP} target="_blank" rel="noreferrer">Issue #26 en español</a></h2> */}
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue26FRA} target="_blank" rel="noreferrer">Issue #26 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue26URD} target="_blank" rel="noreferrer">شمارہ نمبر 26 اردو میں</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue26CHI} target="_blank" rel="noreferrer">第26期中文版</a></h2>
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue25ENG} target="_blank" rel="noreferrer">Issue #25 - Freddy Murillo Jr.</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue25ESP} target="_blank" rel="noreferrer">Issue #25 en español</a></h2> */}
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue25FRA} target="_blank" rel="noreferrer">Issue #25 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue25URD} target="_blank" rel="noreferrer">شمارہ نمبر 25 اردو میں</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue25CHI} target="_blank" rel="noreferrer">第25期中文版</a></h2>
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue24ENG} target="_blank" rel="noreferrer">Issue #24 - Premia</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue24ESP} target="_blank" rel="noreferrer">Issue #24 en español</a></h2> */}
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue24FRA} target="_blank" rel="noreferrer">Issue #24 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue24URD} target="_blank" rel="noreferrer">شمارہ نمبر 24 اردو میں</a></h2>
             <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue23ENG} target="_blank" rel="noreferrer">Issue #23 - Michael</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue23ESP} target="_blank" rel="noreferrer">Issue #23 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue23FRA} target="_blank" rel="noreferrer">Issue #23 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue23URD} target="_blank" rel="noreferrer">شمارہ نمبر 23 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue22ENG} target="_blank" rel="noreferrer">Issue #22 - Max Savant Hazelhurst</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue22ESP} target="_blank" rel="noreferrer">Issue #22 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue22FRA} target="_blank" rel="noreferrer">Issue #22 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue22URD} target="_blank" rel="noreferrer">شمارہ نمبر 22 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue21ENG} target="_blank" rel="noreferrer">Issue #21 - Gabriel Nicolas Gonzalez</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue21ESP} target="_blank" rel="noreferrer">Issue #21 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue21FRA} target="_blank" rel="noreferrer">Issue #21 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue21URD} target="_blank" rel="noreferrer">شمارہ نمبر 21 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue20ENG} target="_blank" rel="noreferrer">Issue #20 - Luke Pillarella</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue20ESP} target="_blank" rel="noreferrer">Issue #20 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue20FRA} target="_blank" rel="noreferrer">Issue #20 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue20URD} target="_blank" rel="noreferrer">شمارہ نمبر 20 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue19ENG} target="_blank" rel="noreferrer">Issue #19 - Bertrand Armando Iratchet</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue19ESP} target="_blank" rel="noreferrer">Issue #19 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue19FRA} target="_blank" rel="noreferrer">Issue #19 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue19URD} target="_blank" rel="noreferrer">شمارہ نمبر 19 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue18ENG} target="_blank" rel="noreferrer">Issue #18 - Paul Barba</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue18ESP} target="_blank" rel="noreferrer">Issue #18 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue18FRA} target="_blank" rel="noreferrer">Issue #18 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue18URD} target="_blank" rel="noreferrer">شمارہ نمبر 18 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue17ENG} target="_blank" rel="noreferrer">Issue #17 - Maksim</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue17ESP} target="_blank" rel="noreferrer">Issue #17 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue17FRA} target="_blank" rel="noreferrer">Issue #17 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue17URD} target="_blank" rel="noreferrer">شمارہ نمبر 17 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue16ENG} target="_blank" rel="noreferrer">Issue #16 - Beau Zabdiel Valoria</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue16ESP} target="_blank" rel="noreferrer">Issue #16 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue16FRA} target="_blank" rel="noreferrer">Issue #16 en français</a></h2>
             <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue16URD} target="_blank" rel="noreferrer">شمارہ نمبر 16 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue15ENG} target="_blank" rel="noreferrer">Issue #15 - Ahmad Mardeni</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue15ESP} target="_blank" rel="noreferrer">Issue #15 en español</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue15URD} target="_blank" rel="noreferrer">شمارہ نمبر 15 اردو میں</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue14ENG} target="_blank" rel="noreferrer">Issue #14 - Silka</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue14ESP} target="_blank" rel="noreferrer">Issue #14 en español</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue13ENG} target="_blank" rel="noreferrer">Issue #13 - Olaoluwa Tunmise</a></h2>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue13ESP} target="_blank" rel="noreferrer">Issue #13 en español</a></h2>
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue12ENG} target="_blank" rel="noreferrer">Issue #12 - Latsan</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #12 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue11ENG} target="_blank" rel="noreferrer">Issue #11 - CryptoReuMD</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #11 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue10ENG} target="_blank" rel="noreferrer">Issue #10 - Colson</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #10 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue9ENG} target="_blank" rel="noreferrer">Issue #9 - Tim Seip</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #9 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue8ENG} target="_blank" rel="noreferrer">Issue #8 - Onur Sarayli and Yaraslau Zubrytski</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #8 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue7ENG} target="_blank" rel="noreferrer">Issue #7 - Lorena and Kevin Jones</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #7 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue6ENG} target="_blank" rel="noreferrer">Issue #6 - Paolo Diomede and Alexander</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #6 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue5ENG} target="_blank" rel="noreferrer">Issue #5 - Tony Wang and Vasily Istomin</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #5 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue4ENG} target="_blank" rel="noreferrer">Issue #4 - Dr. Jimoh Sahid and Vadym Kushnir</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #4 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue3ENG} target="_blank" rel="noreferrer">Issue #3 - Ugochukwu Agu and Alexey Shustov</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #3 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue2ENG}target="_blank" rel="noreferrer">Issue #2 - David Dumitrescu and Matias Hernandez</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #2 en Español</a></h2> */}
            <br></br>
            <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={handleIssue1ENG} target="_blank" rel="noreferrer">Issue #1 - Paul Barba and Chidubem Okeke</a></h2>
            {/* <h2 className="QB-about-page-subtitle"><a className="chatbot-link" onClick={() => alert('COMING SOON! ¡PRÓXIMAMENTE, EN BREVE, PRONTO!')} target="_blank" rel="noreferrer">Issue #1 en Español</a></h2> */}
        </div>
</div>
       </>
    );
  }});

export default GraphAdvocatesSpotlight;
