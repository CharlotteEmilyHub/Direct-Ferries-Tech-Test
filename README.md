## Automation Task

We would like you to complete a small task to demonstrate your technical understanding of automation. Keep in mind scalability for the project. You are not expected to spend too much time on this, just between 45 mins to 1 hour, although it is not a timed task. Then create your own git repo and commit your changes there.

---    

1. There are some tests existing and working within homepage-tests feature - please extend the test coverage for sites www.directferries.co.uk and www.directferries.it and ensure all the tests pass. 

---

2. Please write a new test which will Navigate to my account page 'https://account.directferries.com/?culture=en-GB' type in some incorrect details and try to log in. 
   
---

3. Scenarios 1 & 3 within route-check feature are failing. To support a change in the upcoming sprint, you need to write automation for route Amalfi – Neapel. The existing steps do not seem to pass the checks which have been working for all routes up until now. Please investigate & resolve the issue here. 

---

4. If you had extra time, what would you have done differently?

- Implement a base url with a way to pass the top-level domain in as a parameter to easily use different regions' sites
- Figure out a way to run the same tests on different urls instead of re-writing the same tests and specifying different urls for each, if possible
- Use global variables for wait times (short, medium, long) instead of hard-coding them every time
- Functions for getting each element instead of hard-coding most of them every time they're accessed
- A better solution for getting the correct deal instead of passing a hard-coded index. I noticed the issue was the elements contained additional information that matched the route name, but I struggled to narrow the elements down to just the destinations to match the text
- Add more coverage e.g more regions covered, different routes, full booking process, successful login

Please send your finished repo via email to racheld@directferries.com prior to your interview
