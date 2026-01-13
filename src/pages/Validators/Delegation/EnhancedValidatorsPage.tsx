import * as React from "react";
import {Box, Typography} from "@mui/material";
import PageHeader from "../../layout/PageHeader";
import EnhancedValidatorsPageTabs from "./EnhancedTabs";
import {usePageMetadata} from "../../../components/hooks/usePageMetadata";
import {OutOfCommissionPoolsBanner} from "../../../components/OutOfCommissionPoolsBanner";
import {WalletDeprecationBanner} from "../../../components/WalletDeprecationBanner";

export default function EnhancedValidatorsPage() {
  usePageMetadata({title: "Validators"});

  return (
    <Box>
      <PageHeader />
      <Typography variant="h3" marginBottom={2}>
        Validators
      </Typography>
      <OutOfCommissionPoolsBanner />
      <WalletDeprecationBanner />
      <EnhancedValidatorsPageTabs />
    </Box>
  );
}
