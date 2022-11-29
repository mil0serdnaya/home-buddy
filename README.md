# HomeBuddy for homeowners

![HomeBuddy](https://www.homebuddy.com/static/shared1/footer_hero.svg)

## Available Scripts

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`
Build and publish the app to github pages

What should you do:

Create a page with a submit modal form that contains two steps. The appearance should be identical to the Figma design. [https://www.figma.com/file/pCBH66BFKgZEpKUpyp4m7K/Test-Task?node-id=0%3A1]

- Mobile first approach, width from 320px.
- The responsive layout should not break on other devices like tablets.
- Please use BEM methodology, with camel case (camelCase) style to name classes.
- Preprocessor should be used for styles, preferably SASS. We use SCSS in our projects.
- Please use Vanilla JS for modal form and other interactive actions.
- Browser support: Chrome(three latest versions), FF(three latest versions), Safari from v12.

Important interactive actions:

Main page content:

Clicking [Link to form] on the page’s header, will scroll user down to the form button.
[As seen on] badge inside header image - must be an external link to [https://google.com]

Modal form behaviour:

- Modal form opens by clicking the [Get estimate] button.
- Modal form closes by clicking the cross icon on the top right corner.
- Modal form contains two steps. (You can feel free to animate steps transition if you want to.)
- Modal form contains progress bar. (On first step it’s filled 50% width, on second - 100%)
- When the [Next] button is pressed the first step translates into the second one.
- On the second step should be displayed an option that was chosen in the previous step.
- When the [Submit] button is pressed on the second step modal form closes.

If you feel comfortable, and would like to show additional skills you can:

- Make form validation
- Animate form and make smooth steps transition
- Consider using React

