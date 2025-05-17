/**
 * Evaluates a mathematical expression string
 * @param expression - The expression to evaluate (e.g. "2+3×4")
 * @returns The result as a string
 */
export const evaluateExpression = (expression: string): string => {
  // Replace the multiplication and division symbols
  const sanitizedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
  
  try {
    // Using Function constructor to evaluate the expression safely
    // This is generally safer than eval()
    const result = Number(Function('"use strict"; return (' + sanitizedExpression + ')')());
    
    // Format the result
    if (isNaN(result) || !isFinite(result)) {
      return 'Error';
    }
    
    // Convert to string and handle precision
    const resultString = Number.isInteger(result) 
      ? result.toString()
      : parseFloat(result.toFixed(10)).toString();
    
    return resultString;
  } catch (error) {
    console.error('Error evaluating expression:', error);
    return 'Error';
  }
};

/**
 * Formats a number with commas for thousands separators
 * @param num - The number or string to format
 * @returns Formatted string
 */
export const formatNumber = (num: string | number): string => {
  // Parse the number
  const numStr = num.toString();
  
  // Check if it has a decimal point
  const parts = numStr.split('.');
  
  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Join back with decimal point if it exists
  return parts.join('.');
};