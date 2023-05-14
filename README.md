## Terribly Tiny Tales -- assignment
## Given Task
Develop a frontend in Reactjs or Nextjs, which does the following:
On first load, only has a Submit button<br>
On clicking on Submit, it will fetch the contents of https://www.terriblytinytales.com/test.txt<br>
Parse the content and find the frequency of occurrence of each word (some words will occur only once, some twice and so on, and some will occur N times)<br>
Then on the frontend, plot a histogram of the 20 most occurring words.<br>
Also build an "Export" button, which when clicked will download a CSV file of the histogram data.<br>

**X-axis = top 20 words with highest occurrence Y-axis = how many times they occurred in the file** 

### MyApproch
Here I have used different Component to make this project . They are as follows : <br>
1)App.js <br>
2)index. <br>
3)Page.js <br> 
4)Home.js<br>

and additionals files are created for adding **CSS** to the specific component.

Following are the additionals libraries installed in this project :<br>
1)react-chartjs-2, <br>
2)react-csv, <br>
3)react-dom, <br>
4)react-icons, <br>
5)react-router-dom, <br>
6)recharts, <br>

In index page App.js Component is been rendered. <br>
In App.js component, React-router-dom is used so that a single page application can be created when we change from one page to other using submit button in Page Component and previous button in homeComponent .<br>

In Page.js Component, It consists of simple and short introductory of the page with a **Submit** button to go next page i.e **HomeComponent** where the graph is plotted.<br>
Once The submit button is clicked it takes to other page : 

In HomeComponent, the logic of fetching API is written in a function which is called in **UseEffect Hook** and also other hook **useState hook** is used there to set the actual data which is retrieve from given API,  on our page which was intiallized as an empty array.
Also here in the function itself the logic to count top 20 repeating character using javascript slice method is implemented . <br>
Using Conditional method, the following step is taken, If the count is 0 of any word make it 1 and else increase the count by 1.<br>
Using the libaries **recharts**, a **Graph (histogram)** is which represent the data in graph format, where the letters is present in **X-axis** and count of the letters in **Y-axis**.<br>
In this HomeComponent page, **CSVLink** is also used which is insalled and imported from the react libaries "react-csv",  which helps to download the data of most repetitive words in a **CSV format** . and other buttons beside Download options which navigates to previous page (i.e pageComponent) if users wish to.<br>
The logo in previous buttons is imported from **react-icons** libraries.

Thankyou!!
 







