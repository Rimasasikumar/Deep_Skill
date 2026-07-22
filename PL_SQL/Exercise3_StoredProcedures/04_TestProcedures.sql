SET SERVEROUTPUT ON;

BEGIN

    ProcessMonthlyInterest;

    UpdateEmployeeBonus('HR',5);

    TransferFunds(1,2,100);

END;
/