import React from 'react';

class Index extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <html>
              <head>
            	  <meta charset="UTF-8" />
            	  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            	  <meta name="viewport" content="width=device-width,initial-scale=1" />
                  <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
                  <link rel="icon" type="image/png" href="/assets/favicon/favicon-32x32.png" sizes="32x32" />
                  <link rel="icon" type="image/png" href="/assets/favicon/favicon-16x16.png" sizes="16x16" />
                  <link rel="manifest" href="/assets/favicon/manifest.json" />
                  <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#1d1f20" />
                  <meta name="theme-color" content="#ffffff" />
                  <title>Tanner Fiscus</title>
                  <!--<link rel="icon" type="image/ico" href="/tannerfiscuscom-mockup/favicon.ico" />-->
                  <link rel="stylesheet" type="text/css" href="/assets/styles.css" />
                  <link href="https://fonts.googleapis.com/css?family=PT+Serif+Caption" rel="stylesheet">
              </head>
              <body>
                INDEX COMPONENT
                <div id="root" dangerouslySetInnerHTML={{ __html: this.props.markup }}></div>
                <script>
                    { this.props.exposedState }
                </script>
                <script src="/assets/bundle.js"></script>
                <script src="http://twemoji.maxcdn.com/2/twemoji.min.js?2.1.2"></script>
              </body>
            </html>
        );
    }
}
