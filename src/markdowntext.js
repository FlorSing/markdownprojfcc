
import { marked } from "marked";
import Markdown from "marked-react";

const rawmarkdown = '# Welcome to my React Markdown Previewer!';

const MarkdownComponent = () => {
  return <Markdown>{rawmarkdown}</Markdown>;
};


// function MarkdownExample () {
//     getMarkdownText() {
//       var rawMarkup = marked.parse("This is _Markdown_.");
//       return { __html: rawMarkup };
//     };

//       return (
//       <div dangerouslySetInnerHTML={this.getMarkdownText()} />
//       );
//     }
  

