SET SERVEROUTPUT ON;

DECLARE

    CURSOR loan_cursor IS

        SELECT c.Name,
               l.LoanID,
               l.EndDate

        FROM Customers c
        JOIN Loans l

        ON c.CustomerID = l.CustomerID

        WHERE l.EndDate
        BETWEEN SYSDATE
        AND SYSDATE + 30;

BEGIN

    FOR loan_record IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(

            'Reminder: Loan '
            || loan_record.LoanID
            || ' for '
            || loan_record.Name
            || ' is due on '
            || TO_CHAR(loan_record.EndDate,'DD-MON-YYYY')

        );

    END LOOP;

END;
/