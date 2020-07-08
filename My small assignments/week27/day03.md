# HRRN 
## Highest Response Ratio Next (HRRN) Scheduling in OS
***

Highest Response Ratio Next Scheduling is a Non-Preemptive Scheduling algorithm. This algorithm provides the benefits of the shortest job first scheduling algorithm and also removes the limits of the shortest job first scheduling algorithm.

It is one of the most optimal scheduling algorithms among all other scheduling algorithms. In Highest Response Ratio, scheduling of the jobs is implemented on the basis of an additional parameter, which is called Response Ratio. We calculate the response ratio for every available process, and the process, which has the highest response ratio holds the highest priority among all the processes.
***

Response Ratio is calculated with the help of given formula:
> Response Ratio = (W+S)/S


Where,

         W is a Waiting Time

          S is a Service Time or Burst Time

In the following example, we have 5 processes with process ID P1, P2, P3, P4, and P5. The arrival time and burst time of the processes are given in the following table.
      Process ID	   Arrival Time	    Burst Time
              P1	            0	                3
              P2	            2	                7
              P3	            4	                5
              P4	            6	                2
              P5	            8	                4

Gantt Chart
HRRN Scheduling in OS

***

Explanation

    Initially, at time=0, the process P1 was in the ready queue. So, the process P1 completes its execution.
    After the process P1, at time=3, only the process P2 arrived, so the process P2 executed because the operating system did not had any other option.
    At time=10, the processes P3, P4, and P5 were in ready queue. So, to schedule the next process after P2, we had calculated the response ratio.
    Next we calculated the response ratio for P3, P4, and P5.

Response Ratio = W+S/S

  RR(P3) = [(10-4) +5]/5

               = 2.2    

  RR(P4) = [(10-6) +2]/2

                = 3

  RR(P5) = [(10-8) +4]/4

               = 1.5

As it is clear that the Process P4 has the Highest Response ratio, so the Process P4 was scheduled after P2.

    Then, we had two processes i.e., P3 and P5, which are in the ready queue.

         So, we again calculate the Response Ratio for the Process P3 and P5.

          RR (P3) = [(12-6) +2]/2

                      =4

          RR (P5) = [(12-8) +4]/4

                        =2 

       Process P3 has the Highest Response Ratio so, next Process P3 was executed.

    After the Process P3 completed its execution, the Process P5 was only left in the ready queue. So, the Process P3 was executed next.      
***

