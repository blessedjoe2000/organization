"use client";

import { Box, Container } from "@mui/system";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  BackToGallery,
  GalleryImageContainer,
  PhotoPreviewContainer,
} from "../christmasparty2024/styles";

const images = [
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEHoH0j0XCQVona9mTg4uqZ51lfNJdBkhRFSM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixwAtMW9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiqvBIrYyt9EFZPXhoLKgTytDNCr5SVb1vQiHA",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhioYVnilLitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiG11XiVqnNKldaY5ygf0oRZJMtBxWw9ED7TUb",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiK7rXMkhmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiwjVHw5ecSAsezopEyCfJx9PbBw25gX7v4Tau",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHfD6L3avm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhigQokS9lzdBIL4Qb6WnpTeyVwfOl03iGv9P2x",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9UKbOQJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaL13NksZFXZ1C9tgNRPAhIUWK20ybd5QJBD7",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiGKDbtMnNKldaY5ygf0oRZJMtBxWw9ED7TUbv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiXeeW2UMJ5cLgjWQMDVon3l7vXREb8x6fBiIq",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKXYIMJhmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiQZVJaGqW3eF7GOrLaUD5iXkJoYfEhn2Sd8uv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaLhHzCvZFXZ1C9tgNRPAhIUWK20ybd5QJBD7",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhip1ewBDPEnot5mDsTW4FwcAdkRHr8VGhgZl9I",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHoGQf4Navm8xnl7rdgNtoyXPpB3iAI1HYUuG",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiWpfSrsuvCF6Nj2b8XySonfKmeBEzwV9p1LQq",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8wjaqDG1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhix8n88PO9GuqUIhDO7KjmY4oB35fZXFHinTaM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhioUAfUGLitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhizzKy3VvuMFVBrIg9N2UW0Hl8YJ4OieGDfKjX",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi80kNAoG1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiR171ug6LBPQZHCvnSt6kmMl0Grei9XWU18Yj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiLJLRyzxCDSEeV7rNUkxm3qPoYAfj5J6cR4Fn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhia5ez3sZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9HZbUyJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHPSxT5avm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi7VSuO1LTrczkbBdYtT9FeyfPjXugoCNw2V7h",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHfLzYjavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHIBPHWavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi0MzgsOU3rpUa16BG7f4R2jxJCAliyQguTYbW",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhizPB5ap6vuMFVBrIg9N2UW0Hl8YJ4OieGDfKj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiXWwAbvMJ5cLgjWQMDVon3l7vXREb8x6fBiIq",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiorVIFVLitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi2Sj2tncjCWo8iucJbtdRIsOgyKABZ17T6Nmn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJ5Hzpa8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8WVmFrG1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9WpFspJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaL1GhhrZFXZ1C9tgNRPAhIUWK20ybd5QJBD7",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiq0AwSIt9EFZPXhoLKgTytDNCr5SVb1vQiHAz",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKoUzYmhmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZ897O2oxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiXaxOSruMJ5cLgjWQMDVon3l7vXREb8x6fBiI",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhihlAuRLrktG5gx2IBMFrL3qSsOh1aKpzmkwcT",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi5Ln16hN3gGKxRru9b6Jw2dIBOfPLvaQyHWqE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhijP3nys78vW4p9Paid67Tbchq5xtgQZ1lSFu2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixLlJpj9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHoh5rDlavm8xnl7rdgNtoyXPpB3iAI1HYUuG",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhie0OCE6bgjXEPScWZI1TJh92Ktr0Af8CHkm4R",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi5nXPAN3gGKxRru9b6Jw2dIBOfPLvaQyHWqEp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJXvSOV8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhihlsIsoBktG5gx2IBMFrL3qSsOh1aKpzmkwcT",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhijkIhDI78vW4p9Paid67Tbchq5xtgQZ1lSFu2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiSMNFvARI2ZBxXeutOVnGHT6SARcUJ81WQP9Y",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiIIMst1Cpc0L41Gsjtg3PJ2doI6uUne8lMVwh",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhix8nrwpe9GuqUIhDO7KjmY4oB35fZXFHinTaM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJYoInJ8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiM7cPAbH8wsP0WLeCc1TrinQImzBavHZJ4F7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNEGt1fOQ6lt0IyHEJ8j7mpqMf5UwzC2VhGDT",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHoKkC9uavm8xnl7rdgNtoyXPpB3iAI1HYUuG",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8mOA5VSG1xN2g9JtBV7uw3ZzmSRWlsUYj6TI",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiiz7UrxI1SejoxMtDPpRuy5EWGO7s64vqbcTZ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhinoVQ2tmXx3G5p71Fq6LDbi9Bs4mJgolQEt2f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi1yATDNredGlH6QXa4joIBD7Fzfk9VMtZbxN3",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhias8X8HZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPevsUlulmBJ4MDcgf8eYWxwjTrK0hVIyFUOE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaWcH80ZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhijgcy9c78vW4p9Paid67Tbchq5xtgQZ1lSFu2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixWcbhR9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKW3dJehmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiWTByunsuvCF6Nj2b8XySonfKmeBEzwV9p1LQ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEio2McXCQVona9mTg4uqZ51lfNJdBkhRFSMH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZ6ZxFJoxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhinT4diDmXx3G5p71Fq6LDbi9Bs4mJgolQEt2f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhisyqihIjJdcmtCNMvoaHWx8nwZE52u9UD760X",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiGuyQbLnNKldaY5ygf0oRZJMtBxWw9ED7TUbv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixGq8Zh9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiT0ObIDfwajdVnh5Q9lRvTxDI10EZocMLq7O2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhidbbthktwrnfN5UZGx1VSJXT79leQBky3RcAi",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9Gli3WyJ5yYNHJQRVoUgs21Czart6hjimbE8",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiSyLsWERI2ZBxXeutOVnGHT6SARcUJ81WQP9Y",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiqCpsN7t9EFZPXhoLKgTytDNCr5SVb1vQiHAz",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiTSbCD50fwajdVnh5Q9lRvTxDI10EZocMLq7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8i6wHKG1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhix82nRb9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi5h6slBN3gGKxRru9b6Jw2dIBOfPLvaQyHWqE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi5K4yUu6N3gGKxRru9b6Jw2dIBOfPLvaQyHWq",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhibPKy9f2MxpNloQJen8uw9yCU6bsLKRkg2iz0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiw2LqE3AecSAsezopEyCfJx9PbBw25gX7v4Ta",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiSQqwsIyRI2ZBxXeutOVnGHT6SARcUJ81WQP9",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiOQWGHfKnQA0MNvwebGhZ2UdzmLfHlW83X6Vk",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiVuBDrPS0jYKevh2WcDX43EomOZyJAHFzpUld",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiM291cuH8wsP0WLeCc1TrinQImzBavHZJ4F7O",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiX8tP5oMJ5cLgjWQMDVon3l7vXREb8x6fBiIq",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9ajCDbJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiLPi073xCDSEeV7rNUkxm3qPoYAfj5J6cR4Fn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJdJixN8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi6tp0CtrQbuhio0m1HjzdJlpfwCEQYDPa9OyG",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhinWNqYymXx3G5p71Fq6LDbi9Bs4mJgolQEt2f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHo8ZvV6avm8xnl7rdgNtoyXPpB3iAI1HYUuG",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixwUznw9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhifgTfqKVNKuU6kVloF3csy5dmLE4xj8TDahXg",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi8SF2IKG1xN2g9JtBV7uw3ZzmSRWlsUYj6TIH",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi7gEtnZTrczkbBdYtT9FeyfPjXugoCNw2V7hm",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhio9ncVlwLitDdcXlyRpgEIh4bFCZW9m7eJTBP",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhijLfjom78vW4p9Paid67Tbchq5xtgQZ1lSFu2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEHZxam4XCQVona9mTg4uqZ51lfNJdBkhRFSM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiW41efCsuvCF6Nj2b8XySonfKmeBEzwV9p1LQ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHVivzMavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhigUUEFqklzdBIL4Qb6WnpTeyVwfOl03iGv9P2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiSUhIQYRI2ZBxXeutOVnGHT6SARcUJ81WQP9Y",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhigUf9xw6lzdBIL4Qb6WnpTeyVwfOl03iGv9P2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhizPPI9VwvuMFVBrIg9N2UW0Hl8YJ4OieGDfKj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiCj71btHWaHwke5hxVdFvnTNQgGYL86AM9RXB",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJluGOP8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiHVhD5gavm8xnl7rdgNtoyXPpB3iAI1HYUuGL",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi1uOH8DredGlH6QXa4joIBD7Fzfk9VMtZbxN3",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiNhDPcEgOQ6lt0IyHEJ8j7mpqMf5UwzC2VhGD",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiiZFMWhI1SejoxMtDPpRuy5EWGO7s64vqbcTZ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiKpmeIthmOJql04RBu3PnL9CrFsIx8NzpTMXV",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJgGNyt8dhJZqCmEIknoyjt30u2MHBKYw4Dvx",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhinrhMMKEmXx3G5p71Fq6LDbi9Bs4mJgolQEt2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiu4ZEqzdkMG3OuW8EJ40bTpAKeQBUrFLvy1j2",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiWGOkJcsuvCF6Nj2b8XySonfKmeBEzwV9p1LQ",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiIB95gdCpc0L41Gsjtg3PJ2doI6uUne8lMVwh",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaLOq0zLZFXZ1C9tgNRPAhIUWK20ybd5QJBD7",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhixpMujw9GuqUIhDO7KjmY4oB35fZXFHinTaMp",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9YfnDVJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiZC1K9zoxdhKlTEWtMzO4eUb08VR3CnagoLFy",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiGO8AwrnNKldaY5ygf0oRZJMtBxWw9ED7TUbv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhibDPxam2MxpNloQJen8uw9yCU6bsLKRkg2iz0",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiLIRJSIxCDSEeV7rNUkxm3qPoYAfj5J6cR4Fn",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiEH13PVOXCQVona9mTg4uqZ51lfNJdBkhRFSM",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhikJduFpgtbrPNWOjaAfzweTLD3XqYs40iImBC",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiaLBndlZFXZ1C9tgNRPAhIUWK20ybd5QJBD7f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiSYhbvLRI2ZBxXeutOVnGHT6SARcUJ81WQP9Y",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiejaK5zbgjXEPScWZI1TJh92Ktr0Af8CHkm4R",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiRqquGUq6LBPQZHCvnSt6kmMl0Grei9XWU18Y",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhidbH3PZCwrnfN5UZGx1VSJXT79leQBky3RcAi",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhim9oTnl1APSulrLnQzpfj50dbFYqy96sGgTMo",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi09cnePU3rpUa16BG7f4R2jxJCAliyQguTYbW",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiVxnFBCS0jYKevh2WcDX43EomOZyJAHFzpUld",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi6tzcVN1Qbuhio0m1HjzdJlpfwCEQYDPa9OyG",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiPL853eulmBJ4MDcgf8eYWxwjTrK0hVIyFUOE",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhioP1q2ELitDdcXlyRpgEIh4bFCZW9m7eJTBPj",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiJnUUuEF8dhJZqCmEIknoyjt30u2MHBKYw4Dv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiniUd1NmXx3G5p71Fq6LDbi9Bs4mJgolQEt2f",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiQi28GxqW3eF7GOrLaUD5iXkJoYfEhn2Sd8uv",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi9iUY5bJ5yYNHJQRVoUgs21Czart6hjimbE8v",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhiLJgyzrBxCDSEeV7rNUkxm3qPoYAfj5J6cR4F",
  "https://76yw7v2l2z.ufs.sh/f/6tuizpJQbuhi696k4LQbuhio0m1HjzdJlpfwCEQYDPa9OyGK",
];

function Christmasparty2025() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const containerRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedImageIndex(null);
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length,
      );
    }
  };

  useEffect(() => {
    const galleryContainer = containerRef.current;
    if (!galleryContainer) return;

    const handleImageLoad = (img) => {
      const ratio = img.naturalHeight / img.naturalWidth;
      const span = Math.ceil((250 * ratio) / 10);
      if (img.parentElement) {
        img.parentElement.style.gridRowEnd = `span ${span}`;
      }
    };

    const imgs = galleryContainer.querySelectorAll("img");
    imgs.forEach((img) => {
      if (img.complete) {
        handleImageLoad(img);
      } else {
        img.onload = () => handleImageLoad(img);
      }
    });

    return () => {
      imgs.forEach((img) => {
        img.onload = null;
      });
    };
  }, []);

  return (
    <div className="my-10">
      <Container>
        <h2 className="text-4xl">Christmas Party 2025</h2>

        <GalleryImageContainer ref={containerRef}>
          {images.map((url, index) => (
            <Box key={index} className="gallery-item">
              <Image
                src={url}
                alt={`christmas party ${index + 1}`}
                width={400}
                height={250}
                className="gallery-img"
                onClick={() => setSelectedImageIndex(index)}
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </Box>
          ))}
        </GalleryImageContainer>
        {selectedImageIndex !== null && (
          <PhotoPreviewContainer onClick={() => setSelectedImageIndex(null)}>
            <Box sx={{ position: "relative" }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                type="button"
                className="absolute top-1/2 left-5 -translate-y-1/2 bg-light-blue  p-1 mr-2.5 z-[100] text-white rounded-full"
              >
                <ArrowBackIosNewIcon fontSize="large" />
              </button>

              <Box
                sx={{
                  width: "100%",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={images[selectedImageIndex]}
                  alt="Selected"
                  width={900}
                  height={500}
                  onClick={(e) => e.stopPropagation()}
                  className="preview-img"
                  layout="responsive"
                  objectFit="contain"
                  unoptimized
                />
              </Box>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                type="button"
                className="absolute top-1/2 right-5 -translate-y-1/2 p-1 mr-2.5 z-[100] text-white bg-light-blue rounded-full"
              >
                <ArrowForwardIosIcon fontSize="large" />
              </button>
            </Box>
          </PhotoPreviewContainer>
        )}
        <Link href="/gallery">
          <BackToGallery>
            <ArrowBackIcon /> Back To Gallery
          </BackToGallery>
        </Link>
      </Container>
    </div>
  );
}

export default Christmasparty2025;
