// This file is part of BenchExec, a framework for reliable benchmarking:
// https://github.com/sosy-lab/benchexec
//
// SPDX-FileCopyrightText: 2019-2020 Dirk Beyer <https://www.sosy-lab.org>
//
// SPDX-License-Identifier: Apache-2.0

const stats =
  "data:text/plain;base64,Ly8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgQmVuY2hFeGVjLCBhIGZyYW1ld29yayBmb3IgcmVsaWFibGUgYmVuY2htYXJraW5nOgovLyBodHRwczovL2dpdGh1Yi5jb20vc29zeS1sYWIvYmVuY2hleGVjCi8vCi8vIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMTktMjAyMCBEaXJrIEJleWVyIDxodHRwczovL3d3dy5zb3N5LWxhYi5vcmc+Ci8vCi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wCgpjb25zdCBtYXliZUFkZCA9IChhLCBiLCB0eXBlKSA9PiB7CiAgaWYgKE51bWJlcihiKSkgewogICAgcmV0dXJuIGEgKyBOdW1iZXIoYik7CiAgfQogIGlmICh0eXBlID09PSAic3RhdHVzIikgewogICAgcmV0dXJuIGEgKyAxOwogIH0KICByZXR1cm4gYTsKfTsKCm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7CiAgY29uc3QgeyBkYXRhLCB0cmFuc2FjdGlvbiB9ID0gZS5kYXRhOwoKICBjb25zdCBkZWZhdWx0T2JqID0gewogICAgc3VtOiAwLAogICAgYXZnOiAwLAogICAgbWF4OiAwLAogICAgbWVkaWFuOiAwLAogICAgbWluOiBJbmZpbml0eSwKICAgIHN0ZGV2OiAwLAogICAgdmFyaWFuY2U6IDAsCiAgfTsKCiAgY29uc3QgY29weSA9IFsuLi5kYXRhXS5maWx0ZXIoCiAgICAoaSkgPT4gaSAmJiBpLmNvbHVtbiAhPT0gdW5kZWZpbmVkICYmIGkuY29sdW1uICE9PSBudWxsLAogICk7CgogIGlmIChjb3B5Lmxlbmd0aCA9PT0gMCkgewogICAgcG9zdFJlc3VsdCh7IHRvdGFsOiB1bmRlZmluZWQgfSwgdHJhbnNhY3Rpb24pOwogICAgcmV0dXJuOwogIH0KCiAgY29uc3QgYnVja2V0cyA9IHt9OwogIGNvcHkuc29ydCgoYSwgYikgPT4gYS5jb2x1bW4gLSBiLmNvbHVtbik7CgogIGNvbnN0IHRvdGFsID0geyAuLi5kZWZhdWx0T2JqLCBpdGVtczogW10gfTsKCiAgdG90YWwubWF4ID0gY29weVtjb3B5Lmxlbmd0aCAtIDFdLmNvbHVtbjsKICB0b3RhbC5taW4gPSBjb3B5WzBdLmNvbHVtbjsKCiAgLy8gY2FsY3VsYXRpb24KICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weSkgewogICAgY29uc3Qga2V5ID0gYCR7aXRlbS5jYXRlZ29yeVR5cGV9LSR7aXRlbS5yZXN1bHRUeXBlfWA7CiAgICBjb25zdCB0b3RhbEtleSA9IGAke2l0ZW0uY2F0ZWdvcnlUeXBlfS10b3RhbGA7CiAgICBjb25zdCB7IGNvbHVtblR5cGU6IHR5cGUsIGNvbHVtbiwgY29sdW1uVGl0bGU6IHRpdGxlIH0gPSBpdGVtOwogICAgY29uc3QgYnVja2V0ID0gYnVja2V0c1trZXldIHx8IHsKICAgICAgLi4uZGVmYXVsdE9iaiwKICAgICAgdGl0bGUsCiAgICAgIGl0ZW1zOiBbXSwKICAgIH07CgogICAgY29uc3Qgc3ViVG90YWxCdWNrZXQgPSBidWNrZXRzW3RvdGFsS2V5XSB8fCB7CiAgICAgIC4uLmRlZmF1bHRPYmosCiAgICAgIHRpdGxlLAogICAgICBpdGVtczogW10sCiAgICB9OwoKICAgIGJ1Y2tldC5zdW0gPSBtYXliZUFkZChidWNrZXQuc3VtLCBjb2x1bW4sIHR5cGUpOwogICAgc3ViVG90YWxCdWNrZXQuc3VtID0gbWF5YmVBZGQoc3ViVG90YWxCdWNrZXQuc3VtLCBjb2x1bW4sIHR5cGUpOwoKICAgIGlmICghaXNOYU4oTnVtYmVyKGNvbHVtbikpKSB7CiAgICAgIGNvbnN0IG51bUNvbCA9IE51bWJlcihjb2x1bW4pOwogICAgICBidWNrZXQubWF4ID0gTWF0aC5tYXgoYnVja2V0Lm1heCwgbnVtQ29sKTsKICAgICAgYnVja2V0Lm1pbiA9IE1hdGgubWluKGJ1Y2tldC5taW4sIG51bUNvbCk7CiAgICAgIHN1YlRvdGFsQnVja2V0Lm1heCA9IE1hdGgubWF4KHN1YlRvdGFsQnVja2V0Lm1heCwgbnVtQ29sKTsKICAgICAgc3ViVG90YWxCdWNrZXQubWluID0gTWF0aC5taW4oc3ViVG90YWxCdWNrZXQubWluLCBudW1Db2wpOwogICAgfSBlbHNlIHsKICAgIH0KCiAgICB0b3RhbC5zdW0gPSBtYXliZUFkZCh0b3RhbC5zdW0sIGNvbHVtbiwgdHlwZSk7CgogICAgYnVja2V0Lml0ZW1zLnB1c2goaXRlbSk7CiAgICBzdWJUb3RhbEJ1Y2tldC5pdGVtcy5wdXNoKGl0ZW0pOwoKICAgIGJ1Y2tldHNba2V5XSA9IGJ1Y2tldDsKICAgIGJ1Y2tldHNbdG90YWxLZXldID0gc3ViVG90YWxCdWNrZXQ7CiAgfQoKICBmb3IgKGNvbnN0IFtidWNrZXQsIHZhbHVlc10gb2YgT2JqZWN0LmVudHJpZXMoYnVja2V0cykpIHsKICAgIHZhbHVlcy5hdmcgPSB2YWx1ZXMuc3VtIC8gdmFsdWVzLml0ZW1zLmxlbmd0aDsKCiAgICBpZiAodmFsdWVzLml0ZW1zLmxlbmd0aCAlIDIgPT09IDApIHsKICAgICAgY29uc3QgaWR4ID0gdmFsdWVzLml0ZW1zLmxlbmd0aCAvIDI7CiAgICAgIHZhbHVlcy5tZWRpYW4gPQogICAgICAgIChOdW1iZXIodmFsdWVzLml0ZW1zW2lkeCAtIDFdLmNvbHVtbikgKwogICAgICAgICAgTnVtYmVyKHZhbHVlcy5pdGVtc1tpZHhdLmNvbHVtbikpIC8KICAgICAgICAyLjA7CiAgICB9IGVsc2UgewogICAgICB2YWx1ZXMubWVkaWFuID0gTnVtYmVyKAogICAgICAgIHZhbHVlcy5pdGVtc1tNYXRoLmZsb29yKHZhbHVlcy5pdGVtcy5sZW5ndGggLyAyLjApXS5jb2x1bW4sCiAgICAgICk7CiAgICB9CiAgICBidWNrZXRzW2J1Y2tldF0gPSB2YWx1ZXM7CiAgfQogIHRvdGFsLmF2ZyA9IHRvdGFsLnN1bSAvIGNvcHkubGVuZ3RoOwogIGlmIChjb3B5Lmxlbmd0aCAlIDIgPT09IDApIHsKICAgIC8vIGV2ZW4sIHdlIG5lZWQgYW4gZXh0cmEgc3RlcCB0byBjYWxjdWxhdGUgdGhlIG1lZGlhbgogICAgY29uc3QgaWR4ID0gY29weS5sZW5ndGggLyAyOwogICAgdG90YWwubWVkaWFuID0KICAgICAgKE51bWJlcihjb3B5W2lkeCAtIDFdLmNvbHVtbikgKyBOdW1iZXIoY29weVtpZHhdLmNvbHVtbikpIC8gMi4wOwogIH0gZWxzZSB7CiAgICAvLyBlenB6CiAgICB0b3RhbC5tZWRpYW4gPSBOdW1iZXIoY29weVtNYXRoLmZsb29yKGNvcHkubGVuZ3RoIC8gMi4wKV0uY29sdW1uKTsKICB9CgogIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5KSB7CiAgICBjb25zdCB7IGNvbHVtbiB9ID0gaXRlbTsKICAgIGlmIChpc05hTihOdW1iZXIoY29sdW1uKSkpIHsKICAgICAgY29udGludWU7CiAgICB9CiAgICBjb25zdCBudW1Db2wgPSBOdW1iZXIoY29sdW1uKTsKICAgIGNvbnN0IGJ1Y2tldCA9IGJ1Y2tldHNbYCR7aXRlbS5jYXRlZ29yeVR5cGV9LSR7aXRlbS5yZXN1bHRUeXBlfWBdOwogICAgY29uc3QgdG90YWxLZXkgPSBgJHtpdGVtLmNhdGVnb3J5VHlwZX0tdG90YWxgOwogICAgY29uc3Qgc3ViVG90YWxCdWNrZXQgPSBidWNrZXRzW3RvdGFsS2V5XTsKICAgIGNvbnN0IGRpZmZCdWNrZXQgPSBudW1Db2wgLSBidWNrZXQuYXZnOwogICAgY29uc3QgZGlmZlN1YlRvdGFsID0gbnVtQ29sIC0gc3ViVG90YWxCdWNrZXQuYXZnOwogICAgY29uc3QgZGlmZlRvdGFsID0gbnVtQ29sIC0gdG90YWwuYXZnOwogICAgdG90YWwudmFyaWFuY2UgKz0gTWF0aC5wb3coZGlmZlRvdGFsLCAyKTsKICAgIGJ1Y2tldC52YXJpYW5jZSArPSBNYXRoLnBvdyhkaWZmQnVja2V0LCAyKTsKICAgIHN1YlRvdGFsQnVja2V0LnZhcmlhbmNlICs9IE1hdGgucG93KGRpZmZTdWJUb3RhbCwgMik7CiAgfQoKICB0b3RhbC5zdGRldiA9IE1hdGguc3FydCh0b3RhbC52YXJpYW5jZSAvIGNvcHkubGVuZ3RoKTsKCiAgZm9yIChjb25zdCBbYnVja2V0LCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKGJ1Y2tldHMpKSB7CiAgICB2YWx1ZXMuc3RkZXYgPSBNYXRoLnNxcnQodmFsdWVzLnZhcmlhbmNlIC8gdmFsdWVzLml0ZW1zLmxlbmd0aCk7CiAgICAvLyBjbGVhcmluZyBtZW1vcnkKICAgIGRlbGV0ZSB2YWx1ZXMuaXRlbXM7CiAgICBkZWxldGUgdmFsdWVzLnZhcmlhbmNlOwogICAgYnVja2V0c1tidWNrZXRdID0gdmFsdWVzOwogIH0KCiAgZGVsZXRlIHRvdGFsLml0ZW1zOwogIGRlbGV0ZSB0b3RhbC52YXJpYW5jZTsKCiAgY29uc3QgcmVzdWx0ID0geyB0b3RhbCwgLi4uYnVja2V0cyB9OwoKICAvLyBoYW5kbGluZyBpbiB0ZXN0cwogIHBvc3RSZXN1bHQocmVzdWx0LCB0cmFuc2FjdGlvbik7Cn07Cgpjb25zdCBwb3N0UmVzdWx0ID0gKHJlc3VsdCwgdHJhbnNhY3Rpb24pID0+IHsKICAvLyBoYW5kbGluZyBpbiB0ZXN0cwogIGlmICh0aGlzLm1vY2tlZFBvc3RNZXNzYWdlKSB7CiAgICB0aGlzLm1vY2tlZFBvc3RNZXNzYWdlKHsgcmVzdWx0LCB0cmFuc2FjdGlvbiB9KTsKICAgIHJldHVybjsKICB9CiAgcG9zdE1lc3NhZ2UoeyByZXN1bHQsIHRyYW5zYWN0aW9uIH0pOwp9Owo=";

export { stats };
