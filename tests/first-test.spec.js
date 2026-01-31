const { test, expect } = require('@playwright/test');

test('Test 1 - Convert naan veetuku poren', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('veetuku');
  await textField.press('Space');
  await textField.type('poren');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'நான் வீட்டுக்கு போறேன் ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 2 - Convert naan college poittu appidiye library la padikiren', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('college');
  await textField.press('Space');
  await textField.type('poittu');
  await textField.press('Space');
  await textField.type('appidiye');
  await textField.press('Space');
  await textField.type('library');
  await textField.press('Space');
  await textField.type('la');
  await textField.press('Space');
  await textField.type('padikiren');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'நான் காலேஜ் போயிட்டு அப்பிடியே லைப்ரரி ல படிக்கிறேன் ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 3 - Convert naan velila pogamaaten', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('velila');
  await textField.press('Space');
  await textField.type('pogamaaten');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'நான் வெளில போகமாட்டேன் ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 4 - Convert naan romba sombal aa irunthen but veelaya moodichiten', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('romba');
  await textField.press('Space');
  await textField.type('sombal');
  await textField.press('Space');
  await textField.type('aa');
  await textField.press('Space');
  await textField.type('irunthen');
  await textField.press('Space');
  await textField.type('but');
  await textField.press('Space');
  await textField.type('veelaya');
  await textField.press('Space');
  await textField.type('moodichiten');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'நான் ரொம்ப சோம்பல் ஆ இருந்தேன் பட் வேலைய மூடிச்சிட்டேன் ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 5 - Convert neengal eppadi irukinga?', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('neengal');
  await textField.press('Space');
  await textField.type('eppadi');
  await textField.press('Space');
  await textField.type('irukinga?');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'நீங்கள் எப்படி இருக்கீங்க? ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 6 - Convert neenga eppo varuvinga?', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('neenga');
  await textField.press('Space');
  await textField.type('eppo');
  await textField.press('Space');
  await textField.type('varuvinga?');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'நீங்க எப்போ வருவீங்க? ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 7 - Convert seekiram vaa', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('seekiram');
  await textField.press('Space');
  await textField.type('vaa');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'சீக்கிரம் வா ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 8 - Convert naan atha pannuven', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('atha');
  await textField.press('Space');
  await textField.type('pannuven');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'நான் அத பண்ணுவேன் ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 9 - Convert naan atha panna maaten', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('atha');
  await textField.press('Space');
  await textField.type('panna');
  await textField.press('Space');
  await textField.type('maaten');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'நான் அத பண்ண மாட்டேன் ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 10 - Convert vanakkam (single word)', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('vanakkam');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'வணக்கம் ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 11 - Convert dayavu seidhu enakku konjam help pannuveengala?', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('dayavu');
  await textField.press('Space');
  await textField.type('seidhu');
  await textField.press('Space');
  await textField.type('enakku');
  await textField.press('Space');
  await textField.type('konjam');
  await textField.press('Space');
  await textField.type('help');
  await textField.press('Space');
  await textField.type('pannuveengala?');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'தயவு செய்து எனக்கு கொஞ்சம் ஹெல்ப் பண்ணுவீங்களா? ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 12 - Convert sari naan pannuren', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('sari');
  await textField.press('Space');
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('pannuren');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  const actualOutput = await textField.inputValue();
  const expectedOutput = 'சரி நான் பண்ணுறேன் ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Test 13 - Convert naan nethu veetuku poiten', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('nethu');
  await textField.press('Space');
  await textField.type('veetuku');
  await textField.press('Space');
  await textField.type('poiten');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('நான் நேத்து வீட்டுக்கு போய்ட்டேன் ');
});

test('Test 14 - Convert naan ippo saaptutu irukken', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('ippo');
  await textField.press('Space');
  await textField.type('saaptutu');
  await textField.press('Space');
  await textField.type('irukken');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('நான் இப்போ சாப்டுட்டு இருக்கேன் ');
});

test('Test 15 - Convert naan naalaikku varuven', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('naalaikku');
  await textField.press('Space');
  await textField.type('varuven');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('நான் நாளைக்கு வருவேன் ');
});

test('Test 16 - Convert naanga ellarum povom', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naanga');
  await textField.press('Space');
  await textField.type('ellarum');
  await textField.press('Space');
  await textField.type('povom');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('நாங்க எல்லாரும் போவோம் ');
});

test('Test 17 - Convert avanga varuvanga', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('avanga');
  await textField.press('Space');
  await textField.type('varuvanga');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('அவங்க வருவாங்க ');
});

test('Test 18 - Convert Zoom meeting sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('enakku');
  await textField.press('Space');
  await textField.type('Zoom');
  await textField.press('Space');
  await textField.type('meeting');
  await textField.press('Space');
  await textField.type('irukku');
  await textField.press('Space');
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('laptop');
  await textField.press('Space');
  await textField.type('la');
  await textField.press('Space');
  await textField.type('join');
  await textField.press('Space');
  await textField.type('panuren');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('எனக்கு ஜூம் மீட்டிங் இருக்கு நான் லேப்டாப் ல ஜோஇன் பண்றேன் ');
});

test('Test 19 - Convert naan kandy la office ku late aa poiten', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('naan');
  await textField.press('Space');
  await textField.type('kandy');
  await textField.press('Space');
  await textField.type('la');
  await textField.press('Space');
  await textField.type('office');
  await textField.press('Space');
  await textField.type('ku');
  await textField.press('Space');
  await textField.type('late');
  await textField.press('Space');
  await textField.type('ah');
  await textField.press('Space');
  await textField.type('poiten');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('நான் கண்டி ல ஆபீஸ் கு லேட்டா ஆஹ் போய்ட்டேன் ');
});

test('Test 20 - Convert meeting evening nadakkum', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();
  await textField.type('meeting');
  await textField.press('Space');
  await textField.type('evening');
  await textField.press('Space');
  await textField.type('nadakkum');
  await textField.press('Space');
  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('மீட்டிங் ஈவினிங் நடக்கும் ');
});

test('Test 21 - Convert imbathu rubaai mattum podhum', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();

  await textField.type('imbathu'); await textField.press('Space');
  await textField.type('rubaai'); await textField.press('Space');
  await textField.type('mattum'); await textField.press('Space');
  await textField.type('podhum'); await textField.press('Space');


  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('ஐம்பது ருபாய் மட்டும் போதும் ');
});


test('Test 22 - Convert romba romba nandri', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();

  await textField.type('romba'); await textField.press('Space');
  await textField.type('romba'); await textField.press('Space');
  await textField.type('nandri'); await textField.press('Space');

  await page.waitForTimeout(1500);
  await expect(textField).toHaveValue('ரொம்ப ரொம்ப நன்றி ');
});


test('Test 23 - Convert university exam sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');
  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();

  await textField.type('naan'); await textField.press('Space');
  await textField.type('indaiku'); await textField.press('Space');
  await textField.type('university'); await textField.press('Space');
  await textField.type('ku'); await textField.press('Space');
  await textField.type('ponen.'); await textField.press('Space');
  await textField.type('Exam'); await textField.press('Space');
  await textField.type('eluthitu'); await textField.press('Space');
  await textField.type('bus'); await textField.press('Space');
  await textField.type('la'); await textField.press('Space');
  await textField.type('veetuku'); await textField.press('Space');
  await textField.type('vanthuten.'); await textField.press('Space');
  await textField.type('Varakulla'); await textField.press('Space');
  await textField.type('seriyaana'); await textField.press('Space');
  await textField.type('mazhai.'); await textField.press('Space');

  await page.waitForTimeout(2000);
  await expect(textField).toHaveValue('நான் இண்டைக்கு யூனிவர்சிட்டி கு போனேன். எக்ஸாம் எழுதிட்டு பஸ் ல வீட்டுக்கு வந்துட்டேன். வரக்குள்ள சரியான மழை. ');
});


test('Test 24 - Convert dei machan super daa!', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/', { timeout: 90000 });
  await page.waitForLoadState('domcontentloaded');

  const textField = page.locator('#transliterateTextarea');
  await textField.waitFor({ state: 'visible' });
  await textField.click();

  await textField.type('dei'); await textField.press('Space');
  await textField.type('machan'); await textField.press('Space');
  await textField.type('super'); await textField.press('Space');
  await textField.type('daa!');

  await page.waitForTimeout(1500);

  const value = await textField.inputValue();
  expect(value.trim()).toBe('டேய் மச்சான் சூப்பர் டா!');
});

test('Test 24 - Convert naanveetukuporenippo', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  await textField.type('naanveetukuporenippo'); await textField.press('Space');
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான் வீட்டுக்கு போறேன் இப்போ');
});

test('Test 25 - Convert naan varuvenn!!!!!!!!', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  await textField.type('naan'); await textField.press('Space');
  await textField.type('varuvenn!!!!!!!!'); await textField.press('Space');
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான் வருவேன்!');
});

test('Test 26 - Convert naan இன்னிக்கு college poren', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  await textField.type('naan'); await textField.press('Space');
  await textField.type('inniku'); await textField.press('Space');
  await textField.type('college'); await textField.press('Space');
  await textField.type('poren'); await textField.press('Space');
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான் இன்னிக்கு கல்லூரி போறேன்');
});

test('Test 27 - Convert xyz pqr lmn thanglish alla idhu random words dhaan', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  const words = ['xyz','pqr','lmn','thanglish','alla','idhu','random','words','dhaan'];
  for (const word of words) { await textField.type(word); await textField.press('Space'); }
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('xyz pqr lmn தங்கிலீஷ் அல்ல இது ரெண்டோம் ஒர்டஸ் தான்');
});

test('Test 28 - Convert naan veeta', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  await textField.type('naan'); await textField.press('Space');
  await textField.type('veeta'); await textField.press('Space');
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான் வீட்ட');
});

test('Test 29 - Convert naan veetuku poren @#$%^&*()', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  const words = ['naan','veetuku','poren','@#$%^&*()'];
  for (const word of words) { await textField.type(word); await textField.press('Space'); }
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான் வீட்டுக்கு போறேன்');
});

test('Test 30 - Convert naaaaaaaaaaaaaaaaaaaaaaaaaaaan veetuku poren', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  const words = ['naaaaaaaaaaaaaaaaaaaaaaaaaaaan','veetuku','poren'];
  for (const word of words) { await textField.type(word); await textField.press('Space'); }
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான் வீட்டுக்கு போறேன்');
});

test('Test 31 - Convert naan 123abc456def789 poren', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  const words = ['naan','123abc456def789','poren'];
  for (const word of words) { await textField.type(word); await textField.press('Space'); }
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான் 123abc456def789 போறேன்');
});

test('Test 32 - Convert naan          veetuku          poren', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  const words = ['naan','veetuku','poren'];
  for (const word of words) { await textField.type(word); await textField.press('Space'); }
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான்      வீட்டுக்கு போறேன்');
});

test('Test 33 - Convert dei thalaivar mass thala gethu semma', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  const words = ['dei','thalaivar','mass','thala','gethu','semma'];
  for (const word of words) { await textField.type(word); await textField.press('Space'); }
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('டேய் தலைவர் மாஸ் தல கெத்து செம்ம');
});

test('Test 34 - Convert naan veetuku poren', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const textField = page.locator('#transliterateTextarea');
  await textField.click();
  const words = ['naan','veetuku','poren'];
  for (const word of words) { await textField.type(word); await textField.press('Space'); }
  await page.waitForTimeout(1500);
  const actual = await textField.inputValue();
  expect(actual.trim()).toBe('நான் வீட்டுக்கு போறேன்');
});


