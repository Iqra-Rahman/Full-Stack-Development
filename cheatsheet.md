EVENT LOOP
    javascript is non blocking (JS does not wait for slow operations like timers, API calls, events), single threaded (JS can execute only one task at a time) language.
    JS has a runtime environment most widely used is V8 engine. 
        -the runtime environment gives us the heap, where memory is allocated.
        -the runtime environment also gives us a call stack, where codes are executed. The call stack can only execute one piece of code at a time in its single thread.
    The event loop continuously monitors the call stack and the task queues, and when the stack is empty, it pushes pending callbacks for execution, enabling JavaScript to be non-blocking despite being single-threaded.

    things we can do asynchrnously - setTimeout, setInterval, fetching data across the network, promises

    ---------------------- EXAMPLE ---------------------------
    console.log("1")
    setTimeout(function(){
    console.log("2")
    }, 3000)
    console.log("3")

        Initial State (Before execution starts) - Call Stack: empty, Web APIs: empty, Task Queue: empty, Event Loop: idle, waiting

            Step 1: console.log("1") - console.log("1") is pushed in call stack, It executes immediately. Then popped off
                    Output = 1
                    
        State after execution - Call Stack: empty, Web APIs: empty, Task Queue: empty

            Step 2: setTimeout(...)
                        setTimeout(function(){
                        console.log("2")
                        }, 3000)
                    setTimeout is pushed to the Call Stack -> Browser runtime (Web APIs) registers a 3-second timer -> The callback function is handed over to Web APIs -> setTimeout is popped from the Call Stack
                    NOTE: The callback does NOT execute now, JavaScript does NOT wait - This is where JS remains non-blocking

        State now - Call Stack: empty, Web APIs: timer running (3 seconds), Task Queue: empty
        Output = Nothing is printed here

            Step 3: console.log("3") is pushed in call stack -> Executes immediately -> Popped off
                    Output = 3

        State now - Call Stack: empty -> Web APIs: timer still running -> Task Queue: empty

            Step 4: Timer finishes (after 3 seconds) - he 3-second timer completes inside Web APIs
                    The callback function:
                        function(){
                        console.log("2")
                        }
                    is moved to the Task Queue

        State now - Call Stack: empty, Web APIs: empty, Task Queue: callback waiting

            Step 5: the Event Loop pushes the callback from the Task Queue into the Call Stack.

            Step 6: Callback executes - Call Stack: console.log("2") is pushed -> Executes -> Popped off
                    Output = 2

        Final Output Order 
        1 3 2
    ----------------------------------------------------