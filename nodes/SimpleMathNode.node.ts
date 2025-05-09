import { IExecuteFunctions } from 'n8n-workflow';

export class SimpleMathNode {
  async execute(this: IExecuteFunctions): Promise<any> {
    // Get input parameters from the node’s UI
    const operation = this.getNodeParameter('operation', 0) as string;
    const numberA = this.getNodeParameter('numberA', 0) as number;
    const numberB = this.getNodeParameter('numberB', 0) as number;

    // Perform the arithmetic operation
    let result: number;
    switch (operation) {
      case 'add':
        result = numberA + numberB;
        break;
      case 'subtract':
        result = numberA - numberB;
        break;
      case 'multiply':
        result = numberA * numberB;
        break;
      case 'divide':
        if (numberB === 0) {
          throw new Error('Division by zero is not allowed');
        }
        result = numberA / numberB;
        break;
      default:
        throw new Error('Invalid operation');
    }

    // Return the result in n8n’s expected format
    return [
      {
        json: {
          result,
        },
      },
    ];
  }
}