import { handleSubmit, isValidUrl } from '../src/client/js/formHandler';

describe("Testing the submit functionality", () => {

  test('isValidUrl function correctly validates URLs', () => {
    expect(isValidUrl('http://isvalidurl.com')).toBe(true);
    expect(isValidUrl('Invalid')).toBe(false);
  });

  test("Testing the handleSubmit() function", async () => {
    const sendToServer = jest.fn(async (url) => ({
      agreement: "AgreementValue",
      confidence: "ConfidenceValue",
      irony: "IronyValue",
      model: "modelValue", 
      score_tag: "ScoreTagValue",
      subjectivity: "SubjectivityValue'"
    }));
    const preventDefault = jest.fn();
    const event = { preventDefault };
    await handleSubmit(event);
    expect(sendToServer).toHaveBeenCalledWith('http://isvalidurl.com');
  });
});
