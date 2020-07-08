# ReactJS

## [Redux (Theory)](https://medium.com/javascript-in-plain-english/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6)

## Explanation

![](RackMultipart20200707-4-bjp31c_html_5b24fb54b2e857c8.png)


# **Three Principles**

- Centralized Data System (The [state](https://redux.js.org/glossary#state) of your whole application is stored in an object tree within a single [store](https://redux.js.org/glossary#store).)
- The only way to change the state is to emit an [action](https://redux.js.org/glossary#action), an object describing what happened.
- To specify how the state tree is transformed by actions, you write pure [reducers](https://redux.js.org/glossary#reducer).(pure function)

## **Store**

As you&#39;ve already guessed, the store holds the state of the application.

The store is actually an object, not a class, although it may feel like one at first. It contains a few extra things other than your application&#39;s state as well (like functions and other objects).

Although, theoretically, it is possible to create multiple stores, this is against the pattern that Redux follows.

Remember, we create only one store per application!

We can subscribe to listen to events whenever the store updates. In a non-React app, we might use this subscription to update the UI, for example, as we will be doing in our application.

The state in Redux is in the form of a JavaScript Object and is often referred to as the &quot;state tree&quot;. You can put whatever values you want to store in it and you can nest them as much as you need.

## **Actions**

Actions are plain JavaScript objects that describe **WHAT** happened, but don&#39;t describe HOW the app state changes.

We just dispatch (send) them to our store instance whenever we want to update the state of our application. The rest is handled by the reducers, which we will familiarize ourselves with in just a moment.

One important thing to remember is that Redux requires our action objects to contain a type field. This field is used to describe what kind of action we are dispatching and it should usually be a constant that you export from a file.

All other fields in the action object are optional and are up to you.

## **Reducers**

Reducers are **pure** functions that define **HOW** the app state changes. In other words, they are used to recalculate the new application state or, at least a part of it.

Whenever we dispatch an action to our store, the action gets passed to the reducer.

The reducer function takes two arguments: the previous app state, the action being dispatched and returns the new app state.

(previousState, action) =\&gt; newState

In other words, the reducer will calculate the new state of our app based on the action (and its type) we dispatched.

In a real-world application, your reducers most probably will get very complex. To deal with reducer complexity, we chunk them down in multiple, simpler reducers and later, we combine them with a Redux helper function called combineReducers.

The main reducer is conventionally called **Root Reducer**.

## **Data Flow**

Although it looks a bit complicated at first, the data flow in Redux is actually pretty simple.

![](RackMultipart20200707-4-bjp31c_html_7c39881aeefc6c7b.png)

Data flow in Redux

Let&#39;s say that the user triggers an event (for example, clicks the &quot;Add Note&quot; button) and the app state updates (i.e. a new note is inserted into the app state). Here&#39;s what happens under the hood:

1. The button click handler function _dispatches_ an action to the store with the store.dispatch() method
2. Redux passes down the dispatched action to the reducer
3. The store saves the new state returned by the reducer
4. Since we have _subscribed_ to the store, the function we provided will be called and it will update the UI accordingly (i.e. append the new note in the list of notes)
