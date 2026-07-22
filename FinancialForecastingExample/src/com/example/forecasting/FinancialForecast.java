package FinancialForecastingExample.src.com.example.forecasting;

public class FinancialForecast {

    /**
     * Recursively calculates the future value.
     *
     * @param currentValue Current investment/value
     * @param growthRate Annual growth rate (e.g., 0.10 for 10%)
     * @param years Number of years
     * @return Future value
     */
    public static double forecast(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive case
        return forecast(currentValue * (1 + growthRate), growthRate, years - 1);
    }
}