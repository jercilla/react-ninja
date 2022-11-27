#1 - Introduction 

https://www.youtube.com/watch?v=j942wKiXFu8

#2 - Creating react application

https://www.youtube.com/watch?v=kVeOpcw4GWY

```
$ npx create-react-app dojo-blog
$ cd dojo-blog
$ npm run start
```

#3 - Components & templates

https://www.youtube.com/watch?v=9D1x7-2FmTA

React uses `jsx` instead of `html`
    - `className` vs `class`

Components are, essentially, functions returning (usually) a `jsx`.

#4 - Dynamic values in templates

https://www.youtube.com/watch?v=pnhO8UaCgxg


#5 - Multiple components

https://www.youtube.com/watch?v=0sSYmRImgRY

Component tree:
    App.js (root)
        Navbar.js
        BlogDetails.js
        Sidebar.js
               Categories.js
               Tags.js

New file: Navbar.js + simple react snippets: sfc (stateless functional component)

#6 - Adding Styles

https://www.youtube.com/watch?v=NbTrGcz4DW8

Not component scoped styles but global. index.css vs App.css/component.css

#7 - Click events and functions

https://www.youtube.com/watch?v=0XSDAup85SA


#8 - Using state (stateHook)

https://www.youtube.com/watch?v=4pO-HcG2igk

#9 - React dev tools

https://www.youtube.com/watch?v=rb1GWqCJid4

Browser extension: React Developer Tools -> Component & Profile tools

#10 - Output lists

https://www.youtube.com/watch?v=tHjxSVaj_wY


#11 - Props

https://www.youtube.com/watch?v=PHaECbrKgs0


#12 . Reusing components

https://www.youtube.com/watch?v=-YpnB-zlkPU


#13 - Props and functions

https://www.youtube.com/watch?v=CWEOYFzgOJs


#14 - useEffect

https://www.youtube.com/watch?v=gv9ugDJ1ynU

useEffect runs on every data change, so don't change the state inside useEffect to avoid infinite loop

#15 - useEffect dependencies

Second parameter of useEffect is an array of states we wan't to 'monitor'

#16 - JSON Server

https://www.youtube.com/watch?v=eao7ABGFUXs

Fake JSON API Server: /data/db.json
$ npx json-server --watch data/db.json --port 8000
    GET     /blogs
    GET     /blogs/{id}
    POST    /blogs
    DELETE  /blogs/{id}


#17 - Fetch data

https://www.youtube.com/watch?v=qdCHEUaFhBk

Loading data async requires not rendering component until data is fetched 
(aka conditional templating)

[useEffect(fn, []) is not the new componentDidMount()](https://reacttraining.com/blog/useEffect-is-not-the-new-componentDidMount/)

>This code would work, until you have a situation where the UserProfile has its uid changed while it's mounted. If you have the extra hooks linting rules installed though, you would get a warning until you did [uid] as the dependency array. With that in place, the hooks version is doing what would have been a componentDidMount and a componentDidUpdate at the same time. So you see, the very question of "Is useEffect with an empty dependency array the new version of componentDidMount?" is a flawed question to begin with componentDidMount will most often not be refactored to useEffect(fn, [])
>
>By the way, don't forget to do a cleanup function as well. This will prevent the bug of setting state on an unmounted component and setting stale state when the uid changes:

```
useEffect(() => {
  let isCurrent = true
  getUser(uid).then(user => {
    if (isCurrent) {
      setUser(user)
    }
  })
  return () => {
    isCurrent = false
  }
}, [uid])
```

Ver también [From Classes to Hooks](https://reactjs.org/docs/hooks-faq.html#from-classes-to-hooks)



#18 - Conditional Loading Message

https://www.youtube.com/watch?v=qtheqr0jgIQ


#19 - Fectch errors

https://www.youtube.com/watch?v=DTBta08fXGU


#20 - Custom hook

https://www.youtube.com/watch?v=DTBta08fXGU

usefecth.js -> useFetch (custom hooks needs to start with 'use')


#21 - The react router

https://www.youtube.com/watch?v=DTBta08fXGU

Para evitar que se cargue una página nueva por cada 'link', react intercepta las llamdas y se encarga de mostrar en pantalla el componente asociado a cada url:

/           -> Home.js
/contact    -> Contact.js
/about      -> About.js

$ npm install react-router-dom

App.js -> import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


#22 - Route Match

https://www.youtube.com/watch?v=DTBta08fXGU

Route path by default matches by 'includes'. Change to 'exact' for normal use.


#23 - Router link

https://www.youtube.com/watch?v=DTBta08fXGU

Replace <a href> with <Link to> to prevent/intercept calls to server.


#24 - useEffect Cleanup

https://www.youtube.com/watch?v=DTBta08fXGU

To prevent errors when changing route *before* the previous has finished processing (ie: fetch to server), we need to cancel/cleanup previous hook.


#25 - Route parameters

https://www.youtube.com/watch?v=DTBta08fXGU

ie: /blogs/123


#26 - Reusing custom hook

https://www.youtube.com/watch?v=c-5VXl8yPQA


#27 - Controlled inputs

https://www.youtube.com/watch?v=IkMND33x0qQ



#28 - Submit events

https://www.youtube.com/watch?v=pJiRj02PkJQ

Forms onSubmit


#29 - POST request

https://www.youtube.com/watch?v=EcRFYF4B3IQ


