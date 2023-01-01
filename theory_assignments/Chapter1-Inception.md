# What is Emmet ?
- Emmet is a free add on available in various text editors which can be used to type shortcuts that are expanded into larger piece of code.
- This saves time as well as saves us from getting typos in our code.
For example the following shortcut:
```sh
table>tr*3>td>img+a+p
```
expands to: 

```sh
 <table>
  <tr>
    <td>
      <img src="" alt="" />
      <p></p>
      <a rel="noopener" target="_blank" href=""></a>
    </td>
  </tr>
  <tr>
    <td>
      <img src="" alt="" />
      <p></p>
      <a rel="noopener" target="_blank" href=""></a>
    </td>
  </tr>
  <tr>
    <td>
      <img src="" alt="" />
      <p></p>
      <a rel="noopener" target="_blank" href=""></a>
    </td>
  </tr>
</table>

```
# Difference between a Library and Framework:
- A Library is not an independent executable unit but an additional module requested by a program.
- It contains finished classes and functions that can be used in the code once imported from the library.
- A Framework is a special kind of library that does not contain finished functions. Frameworks are program scaffolds that provide a blueprint, not a finished product.

# What is CDN ? How do we use it ?
CDN stands for Content Delivery Network, refers to a group of geographically distributed servers ensuring fast delivery of internet content.
### CDN provides certain benefits
- Faster loading times
- Reduced bandwith costs
- Increasing content availability and redundancy
- Increasing website security
![CDN example image](https://gtmetrix.com/blog/wp-content/uploads/2017/02/cdn-region-specific.png)

# Why is React known as React ?
- React is designed to be a declarative, efficient and flexible Javascript library for building user interfaces.
- React is named as "React" because it enables developers to write code that reacts to the changes in state and data, letting the user interface to be updated in an efficient and flexible manner.

# What is crossorigin in script tag ?
- The crossorigin attribute is valid on <audio>, <img>, <link>, <script> and <video> elements and provides support for CORS(Cross Origin Resource Sharing), defining how elements handle cross-origin requests.
- The crossorigin is a CORS setting attribute and can have a value of "anonymous" or "user-credentials" 

# Difference between React and ReactDOM.
- React is a Javascript library used for designing user interfaces
- ReactDOM is a complementary library to React which glues React to the browser DOM
- Basically whenever we use class, components and elements we use React library. When we use functions render() that is when we use ReactDOM.

#  What is difference between react.development.js and react.production.js files via CDN?
- react.development.js is only applicable for development environment.
- react.production.js is applicable for production environment. It is a minified and optimized version of React.

# What is async and defer?
- async: async is a boolean attribute when used in a script tag, fetches scripts from external sources while HTML parsing is going on. Once the fetching is complete, the HTML parsing is stopped and the scripts are executed without following the order in which they were called.
- defer: defer is a boolean attribute when used in a script tag, fetches scripts from external sources while HTML parsing is going on parallely. In this case The scripts get executed in order only after HTML parsing is complete.
