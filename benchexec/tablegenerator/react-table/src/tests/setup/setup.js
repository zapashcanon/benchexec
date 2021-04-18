// This file is part of BenchExec, a framework for reliable benchmarking:
// https://github.com/sosy-lab/benchexec
//
// SPDX-FileCopyrightText: 2019-2020 Dirk Beyer <https://www.sosy-lab.org>
//
// SPDX-License-Identifier: Apache-2.0

// enzyme
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Used by @zip.js/zip.js, but not implemented in jsdom via jest, so manually mock it here
window.crypto = jest.fn();

// mock uniqid to have consistent names
// https://stackoverflow.com/a/44538270/396730
jest.mock("uniqid", () => (i) => i + "uniqid");

/**
 * Worker mock
 */
class Worker {
  constructor(dataUrl) {
    this.url = dataUrl;
    const b = Buffer.from(dataUrl.split(",")[1], "base64");
    let onmessage;
    this.mockedPostMessage = (data) => this.cb({ data });

    // we only eval code that we control (worker code)
    // the use is therefore deemed safe in this instance
    // eslint-disable-next-line no-eval
    eval(b.toString()); //new Function("data", b.toString);
    this.onmessageImpl = onmessage;
  }

  mockedPostMessage(data) {
    this.cb({ data });
  }
  postMessage(msg) {
    this.onmessageImpl({ data: { ...msg } });
  }

  set onmessage(cb) {
    this.cb = cb;
    this.mockedPostMessage = (data) => this.cb({ data });
  }
}
window.Worker = Worker;
configure({ adapter: new Adapter() });
