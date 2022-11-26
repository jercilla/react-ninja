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

#18 - Conditional Loading Message

https://www.youtube.com/watch?v=qtheqr0jgIQ

