import React, { useState } from 'react';
import './App.css';
import cat from './catto3.jpg';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'


function ToggleableHeading() {
  const pythonCode = `
  (Also featuring code blocks)
  ~~~python
  # This is just an example Python code block (checks if n is a prime number)
  def is_prime(n: int) -> bool:
    if n <= 1:
      return False
    elif n == 2:
      return True
    elif n % 2 == 0:
      return False
    for i in range(3, int(n ** 0.5) + 1, 2):
      if n % i == 0:
        return False
    return True
  ~~~
  `
  return (
    <div className="CodeBlock">
      {/* Jesus, what is this code*/}
      <ReactMarkdown
      children={pythonCode}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={atomDark}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        }
      }}/>
    </div>
  );
}

function MarkdownDiv() {
  const markdownText = `
  This is an example Markdown div to show an example of markdown usage 
  with [*GitHub Flavored Markdown*](https://github.github.com/gfm/). 
  Made with [React](https://react.dev/) just to try out something new, 
  using the [React-markdown](https://github.com/remarkjs/react-markdown) component for markdown rendering.
  GitHub Flavored Markdown is nice as it supports footnotes[^1] and has nice in-line tables support as well.

  Just | Like | So
  :---: | :---: | :---:
  Simplicity | Is | Nice.
  
  [^1]: Footnotes thanks to gfm.
  `
  return (
    <div
    className="MarkdownDiv">
      <h3 className="MarkdownHeading">Cake!</h3>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownText}
      </ReactMarkdown>
      <ToggleableHeading/>
    </div>
  )
}

function Tests() {
  return (
    <div 
    className="Test">
      <div
        className="transitionDiv" >
        <p className="CakeTest">This is a cake-test component.</p>
      </div>
    </div>
  );
}

function Catto() {
  return (  
    <a className="CatDiv" href="https://github.com/kakuttaja">
      <img src={cat} className="App-logo" alt="logo"/>
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MarkdownDiv />
        <Catto />
        <p className="Cake">
          Cake
        </p>
        <Tests />
      </header>
    </div>
  );
}

export default App;