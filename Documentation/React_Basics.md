# React Basics

React conventions that I understand which may serve as a primer for readers *like youuuuuuu!*

* [JSX](https://reactjs.org/docs/introducing-jsx.html) is React's way of representing HTML components. 

```JSX
const element = <h1>Hello, world!</h1>;
```

* Only one JSX element can be returned as a parent element. Other JSX elements can be children of that component. A valid snippet:
  
```JSX
export default class HelloWorld extends Component {
	render() {
		return (
            <div>
                <h1>Hello World</h1>
			</div>
		);
	}
}
```

```JSX
return (
    <div>
        <h1>Hello World</h1>
    </div>

    <div>Another child element in the return statement. Incorrect.</div>
);

```
* Comments in the returned JSX space are left in {/\*syntax like this\*/}
```JSX
return (
    {/*TODO: make a more interesting example*/}
    <div>
        <h1>Hello World</h1>
	</div>
);
```

* If you are getting errors when you think changes you have made are legitimate syntax, try reloading the client. This is especially true if an import is added. React out of the box doesn't take changes in imports that well.

* Component names in CamelCase

* Folder nesting probably should not exceed 3 or 4 levels