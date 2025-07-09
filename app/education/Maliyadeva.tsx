import Image from "next/image";
import Sections from "./Sections/Sections";
import SectionTopic from "./SectionTopic/SectionTopic";
import { CDNFetch } from "../utils/imageFetch";
import RightArrow from "@svgs/RightArrow";

const Maliyadeva = () => {
  return (
    <Sections id="Maliyadeva" heading="Maliyadeva College" className="mt-10">
      <SectionTopic id="MaliyadevaInfo" heading="Info">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-2/3 md:px-5">
            <p className="text-justify leading-relaxed md:pe-5 px-2">
              Maliyadeva College, founded on September 30, 1888 by the Buddhist
              Theosophical Society led by Colonel Henry Steel Olcott, is a
              prestigious national school in Kurunegala, Sri Lanka . Named after
              Arahant Maliyadeva—the last revered Buddhist Arhat in Sri Lankan
              history—the college currently educates nearly 4,200 boys, from
              primary through GCE A-Levels. The school uniquely incorporates a
              Buddhist temple and an active Buddhist Association formed in 1961.
              These spiritual foundations shape student discipline and
              enrichment through annual rituals like the Katina Pavarana, Pirith
              Pinkama, and religious pageantry. Maliyadeva College is richly
              equipped, featuring playgrounds, auditorium, swimming pool, indoor
              stadium, laboratories (computer, science, botanical/zoological),
              gymnasium, library, medical/dental facilities, student hostel, and
              transport services. The school motto—“Vidya Bhūshanam Purusha
              Bhūshanam”, meaning “Knowledge is the jewel of man”—appears on its
              emblematic crest. The crest also features a tusker (symbolizing
              Kurunegala&apos;s historical name, Athugalpura), and a lotus motif
              representig the Triple Gem and its seven petals signifying
              Kurunegala&apos;s seven provinces. Students are grouped into four
              houses named after Sri Lankan monarchs: Thissa, Gamunu, Parakrama,
              and Rajasinha, which foster inter-school competitions such as the
              annual athletics meet. The school also hosts the Battle of the
              Rocks, a two-day and one-day cricket match held with St.
              Anne&apos;s College at Welagedara Stadium, marking its 41st
              anniversary in 2025. Lastly, alumni—known as “Devans”—include
              prominent figures like international cricketers (e.g., Rangana
              Herath), politicians, senior military and judicial leaders
              including North Western Provincial Chief Minister Athula
              Wijesinghe (2002-2013)
            </p>
            <div className="md:w-1/6 p-2 btn btn-hover my-2">
              <a
                href="https://www.maliyadeva.lk"
                className="text-sm rounded-lg"
                target="_blank"
              >
                <div className="flex justify-center">
                  <span className=" ms-1 text-center">Visit Website</span>
                  <RightArrow className="ms-2 w-4" />
                </div>
              </a>
            </div>
          </div>
          <Image
            src={CDNFetch("/images/56b8ffc1-e90d-4f18-822d-3ca6f2a376cc.jpg")}
            alt="Maliyadeva College"
            width={500}
            height={(500 / 4) * 3}
            className="rounded-lg mt-3 md:w-1/3 h-fit"
          />
        </div>
      </SectionTopic>
      <SectionTopic id="MaliyadevaAcademic" heading="Academic">
        <div className="p-2">
          <p className="text-xl font-semibold">
            G.C.E. Advanced Level (A/L) - 2023
          </p>
          <table className="md:w-1/2 ms-5">
            <thead>
              <tr>
                <th className="w-1/4"></th>
                <th className="w-3/4"></th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr>
                <td className="font-semibold py-1">Stream</td>
                <td> : Physical Science</td>
              </tr>
              <tr>
                <td className="font-semibold py-1 text-justify">Results</td>
                <td>
                  : 3A Passes in Combined Mathematics, Physics, and Chemistry
                </td>
              </tr>
              <tr>
                <td className="font-semibold py-1">Z-Score</td>
                <td> : +2.2132</td>
              </tr>
              <tr>
                <td className="font-semibold py-1">Island Rank</td>
                <td> : 599</td>
              </tr>
              <tr>
                <td className="font-semibold py-1">District Rank</td>
                <td> : 45</td>
              </tr>
              <tr>
                <td className="font-semibold py-1">University Selection</td>
                <td> : University of Moratuwa – Faculty of Engineering</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-xl p-2">
          <p className="text-xl mb-2 font-semibold">
            G.C.E. Ordinary Level (O/L) - 2019
          </p>
          <table className="w-1/2 ms-5">
            <thead>
              <tr>
                <th className="w-1/4"></th>
                <th className="w-3/4"></th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr>
                <td className="font-semibold py-1">Results</td>
                <td> : 8A&apos;s and 1C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionTopic>
    </Sections>
  );
};

export default Maliyadeva;
